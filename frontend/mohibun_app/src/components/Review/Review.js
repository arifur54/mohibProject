import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {ToastContainer, toast } from 'react-toastify';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { API } from '../../api/api';
import {FaStar} from 'react-icons/fa';



export default function Review() {

    
    const [reviewData, setReviewData] = useState([]);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)



    useEffect(()=> {
        async function fetchData(){
            try {
                const res = await API.ReviewGetAllStatus.getAllStatus();
                setReviewData(res.data.data)
                
            } catch (error) {
                toast.error(`Something Went Wrong ${error}`)
            }
        }

        fetchData();
    },[])



    //console.log(error)
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            star: undefined,
            description: '',
            reviewMessage: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('required'),
            email: Yup.string().email("Email is invalid").required("email required"),
            star: Yup.number().required('required'),
            description: Yup.string().required('required'),
            reviewMessage: Yup.string().required('required')
        }),
        onSubmit: async (formData) => {
            const {name, email, star, description, reviewMessage } = formData;
            const newFormData = new Object({
                name,
                email,
                star: star.toString(),
                description,
                reviewMessage
            })


            try {
                const res = await API.ReviewSubmitReview.submitReview(newFormData);
                if(res.data && res.data.error && res.data.error.code){
                    return toast.error(`Unable to send review email, due to your antivirus blocking the request. but the review has been successfully submitted. \n
                     Please turn off your antivirus email protection to restore full functionality.`, 
                     {
                        autoClose: 10000
                    })
                };
                console.log(res)
                if(res.data.msg){
                    toast.success(res.data.msg)
                }
                
                
            } catch (error) {
                toast.error(`something went wrong :( ${error}`)
            }
        }
    })
    
  return (
    <Wrapper>
      <OurReviewWrapper>
        <h1>Please Let us know how we did?</h1>
      </OurReviewWrapper>
        <div className="container">
              <div className="row">
                  <div className="col-5 mt-3">
                      <h2 className="text-start">Client Reviews</h2>
                      <h5 className="text-start">Total Review: <strong>{reviewData.length}</strong></h5>
            
                  </div>
                  <div className="col-2 mt-3">


                  </div>
                  <div className="col-5 mt-5">
                      <button
                          type="button"
                          className="btn btn-primary float-end"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                      >
                          Write a review
                      </button>
                  </div>
              </div>
              <hr />

                {
                    reviewData.map((data, index) => (
                        <div className='row mt-2' key={index}>
                            <div className="col-sm-12">
                                <div className="card mb-2">  
                                    <div className="card-body">
                                        <h6 className="card-title text-start"><strong>Client Rating: </strong> {[...Array(parseInt(data.star))].map((_,index) => (<FaStar key={index} size={20} color='#ffa534' />))} - By - {data.name}</h6>
                                        <h6 className="card-title text-start"><strong>Description of the Job: </strong>  {data.description} </h6>
                                        <p className="card-title text-start"><strong>Message: </strong> {data.reviewMessage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

             

              <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
              >
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">
                                  Write A Review
                              </h5>
                              <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                              ></button>
                          </div>
                          <div className="modal-body">
                              <form onSubmit={formik.handleSubmit}>
                                  <div className='mb-3 text-start'>
                                  <label htmlFor="input_Name" className="form-label">Full Name</label>
                                      <input type="text" name="name" className="form-control" id="inputName" placeholder='Please Enter Your Full Name ...'
                                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
                                      ></input>
                                      {formik.touched.name && formik.errors.name &&
                                          <div className="alert alert-danger" role="alert">
                                              <span>{formik.errors.name}</span>
                                          </div>
                                      }
                                  </div>
                                <div className='mb-3 text-start'>
                                  <label htmlFor="input_email" className="form-label">email</label>
                                      <input type="text" name="email" className="form-control" id="inputEmail" placeholder='Please Enter Your Email...'
                                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                                      ></input>
                                      {formik.touched.email && formik.errors.email &&
                                          <div className="alert alert-danger" role="alert">
                                              <span>{formik.errors.email}</span>
                                          </div>
                                      }
                                  </div>
                                 <div className='mb-3 text-start'>
                                 <label htmlFor="input_star" className="form-label">Ratings: {hoverValue || formik.values.star}</label>
                                 <br></br>
                                 {
                                    stars.map((star, index) => {
                                        const ratingValue = index + 1;
                                        return(
                                            <label key={index}>
                                                <input type="radio" 
                                                name="star" 
                                                style={{ display: "none"}} 
                                                value={formik.values.star} 
                                                onClick={() => {
                                                    formik.setFieldValue('star', ratingValue)
                                                }}
                                                />
                                                <FaStar
                                                size={40} 
                                                color={ratingValue <= (hoverValue || formik.values.star) ? "#ffa534" : "#808080"}
                                                style={{
                                                    cursor: "pointer",
                                                    transition: "color 200ms"
                                                }}
                                                onMouseOver={() => setHoverValue(ratingValue)}
                                                onMouseOut={() => setHoverValue(null)}
                                                />
                                            </label>
                                        )
                                    })
                                 }
                                     {formik.touched.star && formik.errors.star &&
                                          <div className="alert alert-danger" role="alert">
                                              <span>{formik.errors.star}</span>
                                          </div>
                                      }
                                 </div>

                                  <div className='mb-3 text-start'>
                                  <label htmlFor="input_description" className="form-label">Description</label>
                                      <input type="text" name="description" className="form-control" id="inputDescription" placeholder='Please Enter project description ...'
                                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
                                      ></input>
                                      {formik.touched.description && formik.errors.description &&
                                          <div className="alert alert-danger" role="alert">
                                              <span>{formik.errors.description}</span>
                                          </div>
                                      }
                                  </div>
                                  
            
                                  <div className="mb-3 text-start">
                                    <label htmlFor="input_reviewMessage" className="form-label">Message</label>
                                    <textarea className="form-control" name="reviewMessage" id="input_reviewMessage" placeholder='Enter Review Message...' rows="4"
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.reviewMessage}
                                    ></textarea>

                                    {formik.touched.reviewMessage && formik.errors.reviewMessage &&
                                        <div className="alert alert-danger" role="alert">
                                        <span>{formik.errors.reviewMessage}</span>
                                        </div>
                                    }
                                    </div>
                                  <div className="modal-footer ">
                                      <button
                                          type="button"
                                          className="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                      >
                                          Close
                                      </button>
                                      <div className="text-start">
                                          <button type="submit" className="btn btn-primary">Submit</button>
                                      </div >
                                  </div>
                              </form>
                          </div>
            
                      </div>
                  </div>
              </div>
        </div>
     
        < ToastContainer />
    </Wrapper>
  );
}


const OurReviewWrapper = styled.div`
        background-color: #AA9974;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.22'%3E%3Cpolygon fill='%23988968' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2384775a' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%236c6149' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%234c4434' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23000000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        padding-top: 5em;
        padding-bottom: 5em;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius:0 0 50px 50px;
        h1{
            justify-content: center;
            opacity: 80%;
            color: white;
            margin-bottom: 0px;
            font-weight: bold;
            text-shadow: 1px 1px #000000;
            // animation: glow 10s ease-in-out infinite alternate;
        }
` 


const Wrapper = styled.div`
    min-height: 80vh;
    background-color: #D4C098;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.22'%3E%3Cpolygon fill='%23beac88' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23a49576' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23867960' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%235f5644' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23000000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    padding-bottom: 5em;
    
    h1 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 50px;
    }

    h2 {
     font-family: 'Aboreto', cursive;
     font-weight: bold;
     color: aliceblue;
     text-shadow: 1px 1px #000000;
    }

    h5 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        color: aliceblue;
        text-shadow: 1px 1px #000000;
    }

    h6 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 22px;
    }
    p {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 22px;
    }
`


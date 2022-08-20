import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {ToastContainer, toast } from 'react-toastify';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { API } from '../../api/api';
import {FaStar} from 'react-icons/fa';




const colors = {
    MKPurple: "#7A79D6",
    brown: "#d6a779"
    
};


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
      <OurProjectWrapper>
        <h1>Please Let us know how we did?</h1>
      </OurProjectWrapper>
        <div className="container">
              <div className="row">
                  <div className="col-5 mt-3">
                      <h1 className="text-start">Client Reviews</h1>
                      <h6 className="text-start">Total Review: <strong>{reviewData.length}</strong></h6>
            
                  </div>
                  <div className="col-2 mt-3">


                  </div>
                  <div className="col-5 mt-5">
                      <button
                          type="button"
                          className="btn btn-primary"
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
                                <div className="card">  
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
                                  <div className="modal-footer">
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


const OurProjectWrapper = styled.div`
display: flex;
Flex-direction: column;
justify-content: start;
background-image: url(images/reviewImg.webp);
padding-top: 10em;
padding-bottom: 10em;
background-size: cover;
background-position: 5% 55%;
background-repeat: no-repeat;
h1{
    justify-content: center;
    opacity: 80%;
    color: white;
    margin-bottom: 0px;
    text-shadow: 1px 1px #000000;
    animation: glow 10s ease-in-out infinite alternate;
}
` 
const Wrapper = styled.div`
    // background-color: rgb(30 58 138);
    min-height: 80vh;
    padding-bottom: 25px;
`

const ImageBody = styled.div`
    justify-content: bottom;
    background-image: url(images/reviewImg.webp);
    background-size: cover;
    // padding-top: 100em;
    // padding-bottom: 10em;
    background-repeat: no-repeat;

`
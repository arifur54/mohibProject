import React, { useState } from 'react'
import styled from 'styled-components';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export default function Contact_Us_LP() {

    const OurContactWrapper = styled.div`
        background-color: #AA9974;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.22'%3E%3Cpolygon fill='%23988968' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2384775a' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%236c6149' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%234c4434' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23000000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        padding-top: 2em;
        padding-bottom: 2em;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius:0 0 50px 50px;
        margin-bottom: 25px;
        
        h1{
            opacity: 80%;
            padding: 1.5em;
            color: white;
            font-family: 'Josefin Sans', sans-serif;
            font-size: 50px;
            font-weight: bold;
            text-shadow: 1px 1px #000000;
            // animation: glow 10s ease-in-out infinite alternate;
        }
`

    const [optMenuError, setOptMenuError] = useState({errTheme: "info", errText: "Please select an option to continue..."});
   
   
    const formik = useFormik({
        initialValues: {
           firstName: "",
           lastName: "",
           email: "",
           phoneNumber: "",
           options: "",
           customerMessage: "" 
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(20, "First name must be 20 charcters or less").required('First Name required'),
            lastName: Yup.string().max(20, "Last name must be 20 charcters or less").required('Last Name required'),
            email: Yup.string().email("Email is invalid").required("Email Required"),
            phoneNumber: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number is invalid")
            .min(10,'Phone number must be 10 numbers').required("Phone Number is required"),
            options: Yup.string().required("Options required!"),
            customerMessage: Yup.string().max(200).required("Message Required")
            

        }),
        onSubmit: async(formData) => {
            console.log(formData)
            // const {firstName, lastName, email, phoneNumber, options, customerMessage} = formData;
            // console.log(firstName, lastName, email, phoneNumber, options, customerMessage)

            try {
                const res = await axios.post(`/contactus/submit_contact_info`, formData);
                if(res) {
                    toast.success(`Status Code ${res.status}: Your message has been send successfully to MK Builders`);
                }    
            } catch (error) {
                console.log(error)
                if(error){
                    toast.error(`${error.response.data.errMsg}`)
                }

                if(error.response.data.err.code === "ESOCKET"){
                    toast.error(`Your Anti-virus software most likely blocking the send message request, please turn off and try again.`)
                }
            }
        }

    })


  return (
    <div>
        <Wrapper>
              <OurContactWrapper>
                    <h1>Contact Us</h1>
              </OurContactWrapper>

              <div className='container'>
                <div className='row'>
                    <div className='col-md-4 ps-0 pe-0'>
                        <LeftSide>
                            <h3>Our Phone Number</h3>
                            <p>Home - 6471110000 </p>
                            <p>Work - 6471110000 </p>
                            <p>Personal - 6471110000 </p>
                            <h3>Hours of Operation</h3>
                            <p>Monday - friday: 9:00 Am to 5:00 PM</p>
                            <p>Saturday - Sunday: 9:00 Am to 5:00 PM</p>
                        </LeftSide>
                    </div>
                    <div className='col-md-8 ps-0 pe-0'>
                        <RigtSide>
                            <h3>Contact us/Get A Quote</h3>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='row'>
                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputFName"  className="form-label">First Name</label>
                                        <input type="text" name="firstName" className="form-control" id="inputFName" aria-describedby="First Name" placeholder='Jhon...' 
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}
                                        />

                                          {formik.touched.firstName && formik.errors.firstName &&
                                              <div className="alert alert-danger" role="alert">
                                                  <span>{formik.errors.firstName}</span>
                                              </div>
                                          }
                                    </div>


                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputFName"  className="form-label">Last Name</label>
                                        <input type="text" name="lastName" className="form-control" id="inputFName" aria-describedby="Last Name" placeholder='Doe...' 
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}
                                        />

                                          {formik.touched.lastName && formik.errors.lastName &&
                                              <div className="alert alert-danger" role="alert">
                                                  <span>{formik.errors.lastName}</span>
                                              </div>
                                          }
                                    </div>


                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputFName"  className="form-label">E-mail</label>
                                        <input type="text" name="email" className="form-control" id="inputFName" aria-describedby="email" placeholder='something@email.com'
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                                        />

                                          {formik.touched.email && formik.errors.email &&
                                              <div className="alert alert-danger" role="alert">
                                                  <span>{formik.errors.email}</span>
                                              </div>
                                          }
                                    </div>


                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputFName"  className="form-label">Phone Number</label>
                                        <input type="text" name="phoneNumber" className="form-control" id="inputFName" aria-describedby="phone number" placeholder='4161111111...'
                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber}
                                        />

                                          {formik.touched.phoneNumber && formik.errors.phoneNumber &&
                                              <div className="alert alert-danger" role="alert">
                                                  <span>{formik.errors.phoneNumber}</span>
                                              </div>
                                          }
                                    </div>


                                    <div className='mb-3 text-start'>
                                        <label htmlFor="inputOption" aria-label="I am a" className="form-label">I am a</label>
                                        <select className="form-select" name='imOption' aria-label="select an option" 
                                            onChange={(event) => {
                                                if(event.target.value === 'plsSelect'){
                                                    setOptMenuError(prevState => {
                                                        return {...prevState, errTheme: "danger", errText: "Please Select a valid option!"}
                                                    });

                                                    return;
                                                }

                                                setOptMenuError((prevState) => {
                                                    return {...prevState, errTheme: "", errText: ""}
                                                });

                                                formik.setFieldValue("options", event.target.value)
                                            }}
                                        >
                                            <option aria-label="default option" value={"plsSelect"}>Select An Option</option>
                                            <option aria-label="Home Owner" value={"homeOwner"}>Home Owner</option>
                                            <option aria-label="Vendor" value={"vendor"}>Vendor</option>
                                            <option aria-label="Contractor" value={"Contactor"}>Contactor</option>
                                        </select>

                                          {
                                              optMenuError.errTheme !== '' &&
                                              <div className={`alert alert-${optMenuError.errTheme}`} role="alert">
                                                  <span>{optMenuError.errText}</span>
                                              </div>
                                          }
                                    </div>
                                    
                                    
                                    <div className="mb-3 text-start">
                                        <label htmlFor="inputMessage" className="form-label">Write to us!</label>
                                        <textarea className="form-control" name="customerMessage" id="inputMessage" rows="4" placeholder='Write something to us'
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.customerMessage}
                                        ></textarea>
                                        {formik.touched.customerMessage && formik.errors.customerMessage && 
                                            <div className="alert alert-danger" role="alert">
                                             <span>{formik.errors.customerMessage}</span>
                                           </div>
                                        }
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </RigtSide>
                    </div>
                </div>
            </div>
        </Wrapper>

        <ToastContainer />
    </div>
  )
}



const Wrapper = styled.div`
    background-color: #D4C098;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.22'%3E%3Cpolygon fill='%23beac88' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23a49576' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23867960' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%235f5644' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23000000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    padding-bottom: 3em;
    min-height: 80vh;

    h2 {
        text-align: left;
        opacity: 90%;
        color: white;
    }

    label {
        opacity: 90%;
        color: black;  
    }

    button:{
        flex: none;
    }

    button:hover{
        background-color: #f0f0f5;
        opacity: 80%;
    }

`

const LeftSide = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    padding: 25px;
    text-align: left;
    h3 {
        text-align: left;
        margin: 25px;
        opacity: 90%;
        color: white;
    }

    p {
        text-align: left;
        opacity: 90%;
        color: white;  
        margin-left: 8%;
    }
`
const RigtSide = styled.div`
    background-color: white;
    height: 100%;
    width: 100%;
    padding: 25px;
    text-align: left;
    h3 {
        text-align: left;
        opacity: 90%;
        color: black;
    }
`



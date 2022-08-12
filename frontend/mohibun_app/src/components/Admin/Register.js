import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() { 
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().max(15, 'Must be 15 charcters or less').required("required"),
            email: Yup.string().email("Email is invalid").required("email required"),
            password: Yup.string().min(8, 'Password must be at least 8 charaters long').required("Password Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password Must match").required("Confirm Password Required")
        }),
        onSubmit: async(formData) => {
            //Axios implementation
            const {username, email, password, confirmPassword} = formData;
            try{
                const res = await axios.post('/admin/addAdmin', {
                    username, email, password, confirmPassword
                })
                if(res){
                    console.log(res.data)
                    toast.success(`${res.data.msg}!`);

                    // use this to redirect to required page
                    // setTimeout(()=> {
                    //     navigate("/login", {replace: true})
                    // }, 5000)
                 
                }
            }catch(error){
                console.log(error)
                //console.log(error.message)
                let errorMsg = error.response.data.errorMsg
                let errorStatus = error.response.status

                if(error.message){
                    toast.error(`Unauthorized! Please login to register`)
                }
                
                if(errorMsg){
                    toast.error(`Unauthorized! ${errorMsg}`)
                }
                
              
            }
        }
    })



  return (
        <Wrapper>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-3'>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-9'>
                    <div>
                        <h2 className='mb-5'>Admin Register</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="username" className='form-control' placeholder='Enter your name...'
                                 onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}></input>
                                {formik.touched.username &&  formik.errors.username && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.username}</span>
                                </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="text" name="email" className='form-control' placeholder='Enter your email...'
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
                                {formik.touched.email && formik.errors.email && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.email}</span>
                                </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input className='form-control' name="password" type="password" placeholder='Enter password...'
                                onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password}></input>
                                {formik.touched.password && formik.errors.password && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.password}</span>
                                </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input className='form-control' name="confirmPassword" type="password" placeholder='Confirm password...' 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}></input>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.confirmPassword}</span>
                                </div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary m-3">Register</button>
                            <button type="reset" className="btn btn-danger" onClick={formik.resetForm}>reset</button>

                            <ToastContainer />
                        </form>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-3'>

                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: hsl(218, 41%, 15%);
    padding-bottom: 5em;
    padding-top: 5em;
    height: 80vh;
    background-image: radial-gradient(
        650px circle at 0% 0%, 
        hsl(218, 41%, 35%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%
    ),
    radial-gradient(
        1250px circle at 100% 100%, 
        hsl(218, 41%, 45%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%
    );

    h2 {
        padding-top: 25px;
        opacity: 90%;
        color: white;
    }
    label {
        color: white;
    }
    img {
        padding: 2px;
        height: 25vh;
        width: 100wh;
    }
    button:{
        flex: none;
    }

    button:hover{
        background-color: #f0f0f5;
        opacity: 80%;
    }
`
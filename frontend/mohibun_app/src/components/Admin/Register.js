import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../api/api';
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function Register() { 
    let navigate = useNavigate();
    const {user} = useContext(Context);
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
            try{
                const res = await API.AdminAddNewAdmin.addAdmin(formData, user.token);
                if(res){
                    console.log(res.data)
                    toast.success(`${res.data.msg}!`);

                    // use this to redirect to required page
                    setTimeout(()=> {
                        navigate("/login", {replace: true})
                    }, 5000)
                 
                }
            }catch(error){
                console.log(error)
                let errorMsg = error.response.data.errorMsg

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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>

                </div>
                <div className='col-md-6'>
                    <div>
                        <h1 className='mb-3 mt-5 text-start'>Admin Register</h1>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3 text-start">
                                <label className="form-label">Name</label>
                                <input type="text" name="username" className='form-control' placeholder='Enter your name...'
                                 onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}></input>
                                {formik.touched.username &&  formik.errors.username && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.username}</span>
                                </div>
                                }
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">Email address</label>
                                <input type="text" name="email" className='form-control' placeholder='Enter your email...'
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
                                {formik.touched.email && formik.errors.email && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.email}</span>
                                </div>
                                }
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label ">Password</label>
                                <input className='form-control' name="password" type="password" placeholder='Enter password...'
                                onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password}></input>
                                {formik.touched.password && formik.errors.password && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.password}</span>
                                </div>
                                }
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">Confirm Password</label>
                                <input className='form-control' name="confirmPassword" type="password" placeholder='Confirm password...' 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}></input>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.confirmPassword}</span>
                                </div>
                                }
                            </div>
                            <div className='mb-3 text-start'>
                                <button type="submit" className="btn btn-primary me-3">Register</button>
                                <button type="reset" className="btn btn-danger" onClick={formik.resetForm}>Reset</button>
                            </div>
                          
                            
                       
                            <ToastContainer />
                        </form>
                    </div>
                </div>
                <div className='col'>

                </div>
            </div>
        </div>
    )
}


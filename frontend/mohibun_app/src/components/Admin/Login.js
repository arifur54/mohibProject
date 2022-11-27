import React, {useContext} from 'react'
import {Context} from '../../context/Context'
import styled from 'styled-components';
import {useFormik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/api';

export default function Login() {
    let navigate = useNavigate();
    const {dispatch, isFetching} = useContext(Context);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email is invalid").required("Email required"),
            password: Yup.string().min(8, 'Password must be at least 8 charaters long').required("Password Required")
        }),
        onSubmit: async (formData) => {
            //axios will go here :)
            dispatch({type: "LOGIN_START"})
            const {email, password} = formData;
            
            try{
                const res = await API.AdminLoginAdmin.adminLogin(formData);
                   
                if(res.data.errorMsg){
                    toast.error(`Unauthorized! ${res.data.errorMsg}, please try again!`);  
                    return
                }               
                if(res.data){
                    navigate("/admin_panel", {replace: true})
                    dispatch({type: "LOGIN_SUCCESS", payload: res.data})  
                    //window.localStorage.setItem('user', JSON.stringify({userData}));
               
                }
               
                
            }catch(error){
                let errorMsg = error.response.data.msg
                if(error){
                    toast.error(errorMsg);
                    dispatch({type: "LOGIN_FAILURE"})
                }
            }
    
        }
    })

  return (
    <Wrapper>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                    <LeftSide>

                    </LeftSide>
              </div>
              <div className='col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                <RightSide>
                    <h2 className='mb-3'>Admin Login</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" name="email" className='form-control' placeholder='Enter your email'
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
                                    {formik.touched.email && formik.errors.email && 
                                    <div className="alert alert-danger" role="alert">
                                        <span>{formik.errors.email}</span>
                                    </div>
                                    }
                            </div>
                            <div className="mb-5">
                                    <label className="form-label">Password</label>
                                    <input className='form-control' type="password" name="password" placeholder='Enter your password'
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></input>
                                    {formik.touched.password && formik.errors.password && 
                                        <div className="alert alert-danger" role="alert">
                                            <span>{formik.errors.password}</span>
                                        </div>
                                    }

                                <ToastContainer />
                            </div> 
                            <div className='d-grid'> 
                                <button type="submit" className='btn btn-outline-dark btn-lg'><strong>Login</strong></button>
                            </div>  
                        </form>
                </RightSide>
              </div>
              
                
            </div>
  
        </div>
        
    </Wrapper>
  )
}


const Wrapper = styled.div`
    .row > * {
        padding-right: 0px;
        padding-left: 0px;
    }
    padding: 10% 0% 10% 0%;
    
    // overflow: auto;
    background: linear-gradient(315deg, rgba(234, 215, 225, 0.7) 3%, rgba(234, 224, 215, 0.8) 38%, rgba(215,234,224,0.8) 68%, rgba(215, 225, 234, 0.9) 98%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;

    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    
`

const LeftSide = styled.div`
    background-color: black;
    min-height: 100%;
    min-width: 100%;
    height: 650px;
    background-image: url('/images/whole_house_4.webp');
    background-size: cover;
    // border-radius: 15px 0px 0px 15px;
    box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);

`

const RightSide = styled.div`
    background-color: white;
    min-height: 100%;
    min-width: 100%;
    padding: 100px 75px 100px 75px;
    display: block;
    maring: auto;
    padding: auto;
    width: 50%;
    text-align: left;
    box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);
    h2 {
        text-align: left;
        padding-top: 25px;
        opacity: 90%;
        color: black;
    }
    label {
        color: black;
    }

    .button:{
        background-color: #4CAF50; /* Green */
        // border: none;
        // color: white;
        // padding: 15px 32px;
        // text-align: center;
        // text-decoration: none;
        // display: inline-block;
        // font-size: 16px;
    }

    // button:hover{
    //     background-color: #f0f0f5;
    //     opacity: 80%;
    //     color: black;
    // }
  
`
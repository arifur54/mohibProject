import React from 'react'
import styled from 'styled-components';
import {useFormik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export default function Login() {
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
            console.log(formData)
            //axios will go here :)
        }
    })

  return (
    <Wrapper>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-2 col-xs-2'>

              </div>
              <div className='col-lg-4 col-md-4 col-sm-8 col-xs-8'>
              <h2 className='mb-5'>Admin Login</h2>
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
                      <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input className='form-control' type="password" name="password" placeholder='Enter your password'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></input>
                            {formik.touched.password && formik.errors.password && 
                                <div className="alert alert-danger" role="alert">
                                    <span>{formik.errors.password}</span>
                                </div>
                            }
                      </div>    
                      <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-2 col-xs-2'>

              </div>
            </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    background-color: hsl(218, 41%, 15%);
    padding-bottom: 5em;
    padding-top: 10em;
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
        color: black;
    }
`
import React from 'react'
import { Context } from '../../context/Context';
import { useContext } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { API } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProfileSettings() {
    const {user} = useContext(Context);
    
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().min(8, 'Password must be at least 8 charaters long').required("Password Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password Must match").required("Confirm Password Required")
        }),
        onSubmit: async(formData) => {
            const {password, confirmPassword} = formData;
           try {
            await API.AdminChangeAdminPassword.changeAdminPassword({password, email: user.data.email}, user.token)
            formik.resetForm();
            toast.success("Password updated successfully!! ")
           } catch (error) {
            toast.error("Something went wrong: " + error)
           }
        }
    })


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'>

            </div>
            <div className='col-md-6'>
                <h1 className='mb-3 mt-5 text-start'>Profile Settings</h1>
                <hr />
                <div className='mb-3 text-start'>
                <h5 className='mb-3 mt-2 text-start'>Current Profile</h5>
                <p htmlFor="inputOption"><strong>Name:</strong> {user.data.name}</p>
                <p htmlFor="inputOption"><strong>email:</strong> {user.data.email}</p>
                <hr></hr>
                </div>
                  <form onSubmit={formik.handleSubmit}>
                    <h5 className='mb-3 mt-2 text-start'>Change Password</h5>
                      <div className="mb-3 text-start">
                          <label className="form-label ">Password</label>
                          <input className='form-control' name="password" type="password" placeholder='Enter password...'
                              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></input>
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
                          <button type="submit" className="btn btn-primary me-3">Change Password</button>
                          <button type="reset" className="btn btn-danger" onClick={formik.resetForm}>Reset</button>
                      </div>

                  </form>
            </div>
            <div className='col-md-2'>
                          <ToastContainer />
            </div>
        </div>
    </div>
  )
}

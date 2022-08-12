import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProjectPanel() {
  const [optMenuError, setOptMenuError] = useState({ errTheme: "info", errText: "Please select an option to continue..." });
  const [beforeImgError, setBeforeImgError] = useState("");
  const [afterImgError, setAfterImgError] = useState("")
  const [beforeImageFileState, setBeforeImageFileState] = useState("false");

  const formik = useFormik({
    initialValues: {
      projectType: '',
      projectTitle: '',
      location: '',
      description: '',
      beforeImage: [],
      afterImage: []
    },
    validationSchema: Yup.object({
      projectType: Yup.string().required('required'),
      projectTitle: Yup.string().required('required'),
      location: Yup.string().required('required'),
      description: Yup.string().required('required'),
      beforeImage: Yup.mixed().required('required'),
      afterImage: Yup.mixed().required('required')
    }),
    onSubmit: async (formData) => {
      const fData = new FormData();
      const { projectType, projectTitle, location, description, beforeImage, afterImage } = formData
      //console.log(projectType, projectTitle, location, description, beforeImage, afterImage)
      // const modifiedBeforeImages = [];
      // const modifiedAfterImages = [];

      const projectDescriptionData = new Object({
        projectType,
        projectTitle,
        location,
        description,
        beforeImage: [],
        afterImage: []
      })

      const allImages = ['image/webp', 'image/png', 'image/jpg', 'image/jpeg'];

      for (let img of beforeImage) {
        if (allImages.indexOf(img.type) === -1) {
          toast.error("Before Image => Some file types are not allowed! Accepted files types are: webp, jpg, jpeg, and png")
          return;
        }
        projectDescriptionData.beforeImage.push(img);
      }

      for (let img of afterImage) {
        if (allImages.indexOf(img.type) === -1) {
          toast.error("After Image => Some file types are not allowed! Accepted files types are: webp, jpg, jpeg, and png")
          return;
        }

        projectDescriptionData.afterImage.push(img)
      }

      fData.append("projectType", projectDescriptionData.projectType)
      fData.append("projectTitle", projectDescriptionData.projectTitle)
      fData.append("location", projectDescriptionData.location)
      fData.append("description", projectDescriptionData.description)




      for (var i = 0; i < projectDescriptionData.beforeImage.length; i++) {
        fData.append("beforeImage", projectDescriptionData.beforeImage[i]);
      }


      for (var i = 0; i < projectDescriptionData.afterImage.length; i++) {
        fData.append("afterImage", projectDescriptionData.afterImage[i]);
      }


      try {
        const res = await axios({
          method: "post",
          url: "/projects/addProjectDescription",
          data: fData,
          headers: { "Content-Type": "multipart/form-data" },
        })
        
        toast.success("Files uploaded successfully")
      } catch (error) {
        //console.log(error)
        toast.error("Something went wrong :( " + error)
      }
    }


  })

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>

        </div>

        <div className='col-md-6'>

          <h1 className='mb-3 mt-5 text-start'>Project Panel</h1>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-3 text-start'>
              <label htmlFor="inputOption" className="form-label">Select a Project type</label>
              <select className="form-select" name='projectType' aria-label="Select an project type"
                onChange={(event) => {

                  if (event.target.value === 'plsSelect') {

                    setOptMenuError(prevState => {
                      return { ...prevState, errTheme: 'danger', errText: "Please Select a valid option!" }
                    });

                    return;
                  }
                  setOptMenuError((prevState) => {
                    return { ...prevState, errTheme: "", errText: "" }
                  });

                  formik.setFieldValue("projectType", event.target.value)

                }}
              >
                <option value={"plsSelect"}>Please Select an option</option>
                <option value={"Kitchen"}>Kitchen</option>
                <option value={"Bathroom"}>Bathroom</option>
                <option value={"Basement"}>Basement</option>
                <option value={"FullHouse"}>Full House</option>
              </select>
              {
                optMenuError.errTheme !== '' &&
                <div className={`alert alert-${optMenuError.errTheme}`} role="alert">
                  <span>{optMenuError.errText}</span>
                </div>
              }

            </div>



            <div className='mb-3 text-start'>
              <label htmlFor="inputServiceTitle" className="form-label">Project Title</label>
              <input type="text" name="projectTitle" className="form-control" id="inputProjectTitle" placeholder='Enter Project Title...'
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projectTitle}
              ></input>
              {formik.touched.projectTitle && formik.errors.projectTitle &&
                <div className="alert alert-danger" role="alert">
                  <span>{formik.errors.projectTitle}</span>
                </div>
              }
            </div>

            <div className='mb-3 text-start'>
              <label htmlFor="inputServiceTitle" className="form-label">Location Address</label>
              <input type="text" name="location" className="form-control" id="inputLocation" placeholder='Enter location name or Address..'
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.location}
              ></input>
              {formik.touched.location && formik.errors.location &&
                <div className="alert alert-danger" role="alert">
                  <span>{formik.errors.location}</span>
                </div>
              }
            </div>


            <div className="mb-3 text-start">
              <label htmlFor="inputDescription" className="form-label">Write Description</label>
              <textarea className="form-control" name="description" id="inputDescription" placeholder='Enter Description...' rows="4"
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
              ></textarea>

              {formik.touched.description && formik.errors.description &&
                <div className="alert alert-danger" role="alert">
                  <span>{formik.errors.description}</span>
                </div>
              }
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="formFileBeforeLg" name='beforeImage' className="form-label">Add max 10 Before Images</label>
              <input className='form-control form-control-lg' id="formFileBeforeLg" type="file"
                multiple onChange={(event) => {
                  if (event.target.files.length < 1 || event.target.files.length > 10) {
                    setBeforeImgError("Please Add between 1 to 10 images")
                    return;
                  }

                  setBeforeImgError("");
                  formik.setFieldValue("beforeImage", event.target.files);

                }}
              ></input>




              {beforeImgError &&
                <div className="alert alert-danger" role="alert">
                  <span>{beforeImgError}</span>
                </div>
              }
            </div>


            <div className="mb-3 text-start">
              <label htmlFor="formFileBeforeLg" name='afterImage' className="form-label">Add max 10 After Images</label>
              <input className='form-control form-control-lg' id="formFileBeforeLg" type="file"
                multiple onChange={(event) => {
                  if (event.target.files.length < 1 || event.target.files.length > 10) {
                    setAfterImgError("Please Add between 1 to 10 images")
                    return;
                  }
                  setAfterImgError("")
                  formik.setFieldValue("afterImage", event.target.files);

                }}
              ></input>

              {afterImgError &&
                <div className="alert alert-danger" role="alert">
                  <span>{afterImgError}</span>
                </div>
              }
            </div>

            <div className="mb-3 text-start">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div >
          </form>
          <hr />

        </div>

        <div className='col-md-2'>
          <ToastContainer />
        </div>
      </div>
    </div>

  )
}

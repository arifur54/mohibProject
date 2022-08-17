import React from 'react'
import styled from 'styled-components';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';


export default function Review() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            star: '',
            description: '',
            reviewMessage: '',
            reviewStatus: false
        },
        validationSchema: Yup.object({
            name: Yup.string().required('required'),
            email: Yup.string().required('required'),
            star: Yup.string().required('required'),
            description: Yup.string().required('required'),
            reviewMessage: Yup.string().required('required'),
            reviewStatus: Yup.boolean().required('required')
        }),
        onSubmit: async (formData) => {
            console.log(formData);
        }
    })

  return (
    <Wrapper>
      <OurProjectWrapper>
        <h1>Please Let us know how we did?</h1>
      </OurProjectWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 mt-3">
            <h1 className="text-start">Reviews</h1>
            <h6 className="text-start">Total Review</h6>
          </div>
          <div className="col-md-4 col-sm-0 mt-3"></div>
          <div className="col-md-4 col-sm-6">
            <button
              type="button"
              className="btn btn-primary mt-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Write a review
            </button>
          </div>
        </div>

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
                  Write A review
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                    <div className='mb-3 text-start'>

                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    height: 80vh;
`

const ImageBody = styled.div`
    justify-content: bottom;
    background-image: url(images/reviewImg.webp);
    background-size: cover;
    // padding-top: 100em;
    // padding-bottom: 10em;
    background-repeat: no-repeat;

`
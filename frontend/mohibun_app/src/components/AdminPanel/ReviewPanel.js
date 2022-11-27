import React, { useContext, useEffect, useState } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import { API } from '../../api/api';
import { Context } from '../../context/Context';

export default function ReviewPanel() {

  const [reviewData, setReviewData] = useState([]);
  const [reviewStatus, setReviewStatus] = useState();
  const [reviewId, setReviewId] = useState("");
  const {user, dispatch} = useContext(Context)

  

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await API.ReviewGetAllData.getAll(user.token);
        console.log("data" + res.data.data)
        await setReviewData(res.data.data)
      }catch(error){
        if(error.response.data.error.name === 'TokenExpiredError'){
          toast.error(`Token expired, you will now be logged out, Please login again.`)
          return setTimeout(()=> {
            dispatch({type: 'LOGOUT'})
          },6000)
  
        }
        toast.error(`Something went wrong ${error}`)
      }
    }

    fetchData();
  },[reviewId, reviewStatus])

  // Most likely taking a bit of time to get response back from backend, need to add loading functionality. More testing required. 
  const handleStatus = async(id, reviewStatus) => {
    try {
      const res = await API.ReviewSetStatus.setReviewStatus(id, user.token);
      console.log(res.data)
      if(res){
        setReviewStatus(reviewStatus)
        toast.success(`Review Status successfully changed to ${res.data.msg}`)
      } 
      return;
    } catch (error) {
      toast.error(`something went wrong! ${error.response.data}`);
    }
  }

  console.log(reviewStatus)

  async function handleDelete(id){
    try {
      let conf = window.confirm("Are you sure you want to delete this Client Review?") 
      if(conf === true){
        await API.ReviewDelete.deleteReview(id, user.token);
        setReviewId(id);
        toast.success("This Client review has been successfully deleted!");
      }
    } catch (error) {
      toast.error(`Something went wrong, unable to delete client review ${error}`)
    }
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-md-8'>
          <h1 className='mb-3 mt-5 text-start'>Client Reviews</h1>
          <hr />
          <h5 className='mb-3 text-start'>Total Messages: {reviewData.length}</h5>
          {
            reviewData.map((data, index) => (
              <div className='row mt-2' key={index}>
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title text-start"><strong>Review #:</strong> {index}</h6>
                      <h6 className="card-title text-start"><strong>Full Name: {data.name}</strong></h6>
                      <h6 className="card-title text-start"><strong>email: {data.email}</strong></h6>
                      <h6 className="card-title text-start"><strong>Job Description: {data.description}</strong></h6>
                      <h6 className="card-title text-start"><strong>Client Rating: {data.star}</strong> </h6>
                      <h6 className="card-title text-start"><strong>Current review status: {data.reviewStatus.toString()}</strong> </h6>
                      <p className="card-title text-start"><strong>message:  {data.reviewMessage}</strong></p>

                      <button className="btn btn-danger float-end" onClick={() => { handleDelete(data._id) }}>delete</button>
                      <button className="btn btn-warning float-end me-2" onClickCapture={() => { handleStatus(data._id, data.reviewStatus) }}>Change Status</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }




        </div>
        <div className='col-md-2'>

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

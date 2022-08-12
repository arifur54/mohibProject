import React, { useContext, useEffect, useState } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import { API } from '../../api/api';
import { Context } from '../../context/Context';

export default function ReviewPanel() {

  const [reviewData, setReviewData] = useState([]);
  const [reviewStatus, setReviewStatus] = useState();
  const [reviewId, setReviewId] = useState("");
  const {user} = useContext(Context)

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await API.ReviewGetAllData.getAll(user.token);
        setReviewData(res.data.data)
        console.log(res.data.data)
      }catch(error){
        toast.error(`Something went wrong ${error}`)
      }
    }

    fetchData();
  },[reviewStatus, reviewId])

 async function handleStatus(id, reviewStatus){
    try {
      const resStatus = await API.ReviewSetStatus.setReviewStatus(id, user.token);
      setReviewStatus(reviewStatus)
    } catch (error) {
      console.log(error);
      toast.error(`something went wrong! ${error.response.data}`);
    }

     
  }

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
          <h5 className='mb-3 text-start'>Total Messages: </h5>
          {
            reviewData.map((data, index) => (
              <div className='row mt-2' key={index}>
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title text-start"><strong>Full Name: {data.name}</strong></h6>
                      <h6 className="card-title text-start"><strong>email: {data.email}</strong></h6>
                      <h6 className="card-title text-start"><strong>Job Description: {data.description}</strong></h6>
                      <h6 className="card-title text-start"><strong>Client Rating: {data.star}</strong> </h6>
                      <h6 className="card-title text-start"><strong>Current review status: {data.reviewStatus.toString()}</strong> </h6>
                      <p className="card-title text-start"><strong>message:  {data.reviewMessage}</strong></p>

                      <button className="btn btn-danger float-end" onClick={() => { handleDelete(data._id) }}>delete</button>
                      <button className="btn btn-warning float-end me-2" onClick={() => { handleStatus(data._id, data.reviewStatus) }}>Change Review Status</button>
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {API} from "../../api/api";
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function ContactUs() {

  const [contactUsData, setContactUsData] = useState([]);
  const [clientId, setClientId] = useState("");
  const {user} = useContext(Context);
  
  useEffect(()=> {
    async function fetchData(){
      try {
        const res = await API.Contact.getAll(user.token)
        setContactUsData(res.data.reverse());
        console.log(res.data)
      }catch(error){
        toast.error(`Something went wrong ${error}`)
      }    
    }
    fetchData()
  }, [clientId])

  async function handleDelete(id){
    try {
      let conf = window.confirm("Are you sure you want to delete this Client Info?")
      if(conf === true){
        const res = await API.DeleteContact.deleteContactInfo(id, user.token);
        setClientId(id)
        toast.success("The client info successfully deleted!");
      }
      

    } catch (error) {
      toast.error(`Something went wrong, unable to delete customer info ${error}`)
    }
   

  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-md-8'>
          <h1 className='mb-3 mt-5 text-start'>Client Messages</h1>
          <hr />
          <h5 className='mb-3 text-start'>Total Messages: { contactUsData.length}</h5>


          {
            contactUsData.map((data, index) => (
              <div className="row mt-2" key={index}>
                <div className="col-sm-12">
                  <div className="card">  
                    <div className="card-body">
                      <h6 className="card-title text-start"><strong>First Name: </strong>{ data.firstName }</h6>
                      <h6 className="card-title text-start"><strong>Last Name: </strong>{ data.lastName }</h6>
                      <h6 className="card-title text-start"><strong>email: </strong>{ data.email }</h6>
                      <h6 className="card-title text-start"><strong>phoneNumber: </strong>{ data.phoneNumber } </h6>
                      <h6 className="card-title text-start"><strong>Client Type: </strong>{ data.options } </h6>
                      <p className="card-title text-start"><strong>message: </strong>{data.customerMessage}</p>
                      <button className="btn btn-danger float-end" onClick={() => {handleDelete(data._id)}}>delete</button>
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

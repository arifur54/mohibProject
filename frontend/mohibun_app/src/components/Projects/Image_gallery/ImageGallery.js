import React from 'react'
import styled from "styled-components";
import bootstrap from 'bootstrap/dist/js/bootstrap';
import {useState, useEffect,  useContext } from 'react'; 
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';
import { Context } from '../../../context/Context';

function ImageGallery() {

  const params = useParams();
  const navigate = useNavigate();
  const [projectByIdData, setProjectByIdData] = useState([]);
  const [loading, setLoadingStatus] = useState(true);
  const [splitBeforeImage, setSplitBeforeImage] = useState([]);
  const [splitAfterImage, setSplitAfterImage] = useState([]);
  const {user} = useContext(Context);
  

  useEffect(async () => {
    try{
      const result = await axios.get(`/projects/getAllById/${params.gId}`)
      if(!result){
        toast.error("No results found, Admin needs to add project before it can be shown.")
      }
      const splittedBeforeImg = [];
      const splittedAfterImg = [];
      for(let bImg of result.data.data.beforeImage){
        const splitedImg = bImg.split(";")[0];
        splittedBeforeImg.push(splitedImg);
      }

      for(let aImg of result.data.data.afterImage){
        const splitedImg = aImg.split(";")[0];
        splittedAfterImg.push(splitedImg);
      }

    
      setSplitBeforeImage(splittedBeforeImg);
      setSplitAfterImage(splittedAfterImg);
      setProjectByIdData(result.data.data)
      setLoadingStatus(false);
    }catch(error){
      toast.error("Something went wrong:( " + error)
      setLoadingStatus(false);
    }
   
  }, [])



  const handleModle = (e) => {
    if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      // console.log(src)
      document.querySelector('.modal-img').src = src; 
      const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
      // console.log(myModal)
      
      myModal.show();
    }
  }

  const handleClick = async() => {
    try {  
      let conf = window.confirm("Are you sure you want to delete this image gallary?")
      if(conf === true){
        await axios.delete(`/projects/deleteProjectDescription/${params.gId}`);
        toast.success("This image gallary has been successfully deleted")
        navigate(`/projects/${projectByIdData.projectType}`, { replace: true });
      }
      
    } catch (error) {
      toast.error("Something went wrong:( " + error)
    }
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className='container-fluid'>
          <div className='m-4 p-5 text-center bg-light'>
            <h1>{projectByIdData.projectType} Image Gallery
            <hr />
            </h1>

            <h4>{projectByIdData.projectTitle} | {projectByIdData.location}</h4>
            <p>{projectByIdData.description}</p>
          </div>

          <ImgGallery>
            <div className='container'>
              <div className='gallery'>
                <h1 className='text-start'> Before Images</h1>
                <hr />
                <div className='row gy-4 '>
                  {
                    splitBeforeImage.map((beforeImageData) => (
                      <div key={beforeImageData} className="hovorEff col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <img src={beforeImageData} className="gallery-item" onClick={(e) => handleModle(e)} alt="Gallery1" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <hr />

              <div className='gallery mt-4'>
                <h1 className='text-start'> After Images</h1>
                <hr />
                <div className='row gy-4'>
                  {
                    splitAfterImage.map((afterImageData) => (
                      <div key={afterImageData} className="hovorEff col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <img src={afterImageData} className="gallery-item" onClick={(e) => handleModle(e)} alt="Gallery1" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <hr />
              {
                user && (
                  <div className='mt-5'>
                  <button className='btn btn-danger float-end' onClick={handleClick}>Delete this image gallery</button>
                </div>
                )
              }
             
            </div>
        
          
          </ImgGallery>

                  

          <ModalImg>
            <div className="modal fade" id="gallery-popup" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src="" className="modal-img" alt="Modal Image" />
                  </div>
                </div>
              </div>
            </div>
          </ModalImg>
          <ToastContainer />

        </div>
      )}
    </div>
  )
}


export default ImageGallery;


const ImgGallery = styled.div`
    background-color: #dbddf1;
    padding: 80px 0;

    img{
      object-fit: cover;
      width: 600px;
      height: 350px;
      max-width: 100%;
      max-height: 100%;
      cursor:pointer;
      border-radius: 10px 5%;
    }

    .hovorEff{
      // -webkit-transform: scale(1);
	    // transform: scale(1);
	    -webkit-transition: .5s ease-in-out;
	    transition: .5s ease-in-out;
    }

    .hovorEff:hover{
      -webkit-transform: scale(1.3);
	    transform: scale(1.3);
    }


`

const ModalImg = styled.div`
  img{

    max-width: 100%;
  }
`
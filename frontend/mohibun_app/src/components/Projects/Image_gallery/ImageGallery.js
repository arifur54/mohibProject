import React from 'react'
import styled from "styled-components";
import bootstrap from 'bootstrap/dist/js/bootstrap'; 

function ImageGallery() {

  const handleModle = (e) => {
    if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      console.log(src)
      document.querySelector('.modal-img').src = src; 
      const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
      console.log(myModal)
      
      myModal.show();
    }
  }

  return (
 
    <div className='Container-lg mt-3'>
      <div className='m-4 p-5 text-white text-start bg-light'>
        <h1>Image Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat..</p>

      </div>
      
    
      <ImgGallery>
        <div className='container-lg'>
          <div className='gallery'>
              <h1 className='text-start text-white'> Before Images</h1>
              <div className='row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3'>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" onClick={(e) => handleModle(e)}  alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/home1.jpg" className="gallery-item" onClick={(e) => handleModle(e)} alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" onClick={(e) => handleModle(e)} alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" alt="Gallery1" />
                </div>
              </div>
          </div>


          <div className='gallery mt-4'>
              <h1 className='text-start text-white'> After Images</h1>
              <div className='row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3'>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" onClick={(e) => handleModle(e)}  alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/home1.jpg" className="gallery-item" onClick={(e) => handleModle(e)} alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" onClick={(e) => handleModle(e)} alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" alt="Gallery1" />
                </div>
                <div className="col">
                  <img src="/images/file17.jpeg" className="gallery-item" alt="Gallery1" />
                </div>
              </div>
          </div>
        </div>
      </ImgGallery>



      <ModalImg>
        <div className="modal fade" id="gallery-popup" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src="images/1.jpg" className="modal-img" alt="Modal Image" />
              </div>
            </div>
          </div>
        </div>
      </ModalImg>

    </div>

  )
}


export default ImageGallery;


const ImgGallery = styled.div`
    background-color: #dbddf1;
    padding: 80px 0;

    img{
      max-width: 100%;
      cursor:pointer;
    }


`

const ModalImg = styled.div`
  img{
    max-width: 100%;
  }
`
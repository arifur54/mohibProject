import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Projects(props) {
    const [imgDataArr, setImgDataArr] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchData(){
        const dataArr = [];
        for (let data of props.kitchenData) {
            await dataArr.push({ id: data._id, location: data.location, thumbnail: data.beforeImage[0].split(";")[0] })

        }
        setImgDataArr(dataArr)
    }
    fetchData();
    }, [])

    const handleClick = (id) => {
        navigate(`/projects/image_gallery/${id}`, { replace: true })
    }



    const OurProjectWrapper = styled.div`
    &{background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0)),url("${props.images}");
    min-height: 80vh;
    padding-top: 3em;
    padding-bottom: 3em;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

    h1{
        opacity: 80%;
        padding: 1.5em;
        color: white;
        margin-bottom: 0px;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 50px
        text-shadow: 1px 1px #000000;
        animation: glow 10s ease-in-out infinite alternate;
    }

`
    return (
        <Wrapper>
            <OurProjectWrapper>
                <div>
                    <h1 className="text-center display-4 ">{props.type}</h1>

                    <div className='container-fluid fill'>
                        <div className='row'>

                            {
                                imgDataArr.map((data) => (
                                    <div key={data.id} className='col-lg-3 col-md-4 col-sm-12 mb-4 rounded'>
                                        <button type="button" onClick={() => handleClick(data.id)} className="d-nonecard rounded">
                                            <img src={data.thumbnail} className="img-thumbnail" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{data.location}</h5>
                                            </div>
                                        </button>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>

            </OurProjectWrapper>
        </Wrapper>
    )
}

export default Projects;

const Wrapper = styled.div`
    min-height: 75vh;

    h2 {
        margin: 25px;
        opacity: 90%;
        color: white;
    }


    img {
        width: 500px;
        height: 400px;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }


    button:hover{
        background-color: #f0f0f5;
        opacity: 90%;
        border: 1px solid white;
    }

    .fill { 
        min-height: 100%;
        height: 100%;
    }
`
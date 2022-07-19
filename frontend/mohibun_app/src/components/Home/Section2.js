import React from 'react'
import styled from 'styled-components';

//Cards Section 
function Section2() {
    return (
        <Wrap>
            <div className='p-5'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 mt-3'>
                        <CardAnimation>
                            <button className='card bg-dark text-light'>
                                <img className='card-img' src='/images/home1.jpg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text'>Kitchen</h1>
                                    <h6 className='card-text'>This is a kitchen</h6>
                                </div>
                            </button>
                        </CardAnimation>
                    </div>

                    <div className='col-md-4 col-sm-12 mt-3'>
                        <CardAnimation>
                             <button className='card bg-dark text-light'>
                                <img className='card-img' src='/images/file17.jpeg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text'>Bathroom</h1>
                                    <h6 className='card-text'>This is a Bathroom</h6>
                                </div>
                            </button>
                        </CardAnimation>
                    </div>
                    <div className='col-md-4 col-sm-12 mt-3'>
                        <CardAnimation>
                             <button className='card bg-dark'>
                                <img className='card-img' src='/images/home_renovation.jpg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text'>Basement</h1>
                                    <h6 className='card-text'>This is a Basement</h6>
                                </div>
                            </button>
                        </CardAnimation>
                    </div>
                </div>
            </div>

            <div className='container-fluid p-5'>
                <div className='d-sm-flex'>
                    <Textwrapper>
                        <h1>Write Header here</h1>
                        <h4 className='text-left text-light'>Write sub header here</h4>
                        <p className='text-light lead my-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </Textwrapper>
                </div>
            </div>
        </Wrap >
    )
}

export default Section2

const Wrap = styled.div`
height: auto;
background-color: rgb(44, 44, 44);
`
const Textwrapper = styled.div`
    text-align: start;
    h1 {
        color: aliceblue;
    }
    h4{
        color: aliceblue;
    }
    p{
        color: aliceblue;
    }
`
const CardAnimation = styled.div`
    text-align: center;
    img {
        height: 40vh;
        width: 30vw;
      
    }

    @media (max-width: 1200px){
       img {
        height: 25vh;
        width: 30vw;
       }
    }
    @media (max-width: 767px){
        img {
            height: 35vh;
            width: 85vw;
           }
    }
    @media (max-width: 600px){
        img {
            height: 35vh;
            width: 75vw;
           }
    }

    h1 {
        color: #232323;
        padding-top: 5em;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.7);
    }
    h6 {
        color: #D7F4F5;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.7);
    }

    &:hover{
        animation: animateDown infinite 1.5s;  
    }
`
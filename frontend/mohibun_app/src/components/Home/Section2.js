import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

//Cards Section 
function Section2() {
    return (
        <Wrap>
            <div className='p-5'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                        <CardAnimation>
                            <Link to="/services/kitchen" className='card bg-dark'>
                                <img className='card-img' src='/images/kitchen.jpg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text text-center'>Kitchen</h1>
                                    {/* <Link to="/" ></Link> */}
                                </div>
                            </Link>
                        </CardAnimation>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                        <CardAnimation>
                             <Link to="/services/bathroom" className='card bg-dark'>
                                <img className='card-img' src='/images/bathroom_2.jpg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text text-center'>Bathroom</h1>
                                </div>
                            </Link>
                        </CardAnimation>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                        <CardAnimation>
                             <Link to="/services/basement" className='card bg-dark'>
                                <img className='card-img' src='/images/basement.jpg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text text-center'>Basement</h1>
                                </div>
                            </Link>
                        </CardAnimation>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                        <CardAnimation>
                             <Link to="/services/fullhouse" className='card bg-dark'>
                                <img className='card-img' src='/images/whole_house_2.jpg' alt="Card Image" />
                                <div className='card-img-overlay'>
                                    <h1 className='card-text text-center'>Whole House</h1>
                                </div>
                            </Link>
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
    // .card-img-overlay {
    //     top: 9%;
    // }

    img {
        min-height: 40vh;
        height: 100%;
        width: 100%;
    }

    h1 {
        position: relative;
        color: #FFFFEB;
        padding-top: 50%;
        text-shadow: 3px 4px 7px rgba(0,0,0,0.8);
        font-family: 'Bebas Neue', cursive;
    }

    img:hover{
        object-fit: cover;
    }
    // @media (max-width: 830px){
    //     img {
    //         min-height: 50vh;
    //         min-width: 25vw;
    //         height: 100%;
    //         width: 100%;
    //     }
    // }
    // @media (max-width: 600px){
    //     img {
    //         height: 35vh;
    //         width: 75vw;
    //        }
    // }


    // // h6 {
    // //     color: #D7F4F5;
    // //     text-shadow: 2px 4px 3px rgba(0,0,0,0.7);
    // // }

    &:hover{
        animation: animateDown infinite 1.5s; 
    }
`
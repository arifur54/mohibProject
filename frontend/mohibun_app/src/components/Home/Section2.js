import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

//Cards Section 
function Section2() {
    return (
        <Wrap>
            <div className='p-5'>
            <div className='container-fluid'>
                <div className='d-sm-flex'>
                    <Textwrapper> 
                        <h1> Transform Your Home with Us!</h1>
                        {/* <h4 className='text-left text-light'>Write sub header here</h4> */}
                        <p className='text-light lead my-4'>
                        Looking to renovate your home but don't know where to start? Our home renovation service is here to help! We'll work with you to come up with a plan that fits your budget and needs,
                        and we'll handle everything from start to finish. We have been proudly renovating homes for over 10 years and have the experience and expertise to get the job done right. Whether
                        you're looking to update your kitchen, bathroom, basement, whole house or just want to give your home a fresh new look, we're here to help.
                        </p>
                        <Link className='btn btn-outline-light my-2 p-3' to="/contactus"> Contact us today to get started! </Link>
                    </Textwrapper>
                </div>
            </div>
                <div className='row pb-3'>
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
    margin: 5%;
    h1 {
        color: aliceblue;
        font-family: 'Aboreto', cursive;
    }
    h4{
        color: aliceblue;
        font-family: 'Playfair Display', serif;
    }
    p{
        color: aliceblue;
        font-family: 'Playfair Display', serif;
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
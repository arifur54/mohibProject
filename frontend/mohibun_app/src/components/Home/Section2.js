import React from 'react'
import styled from 'styled-components';

//Cards Section 
function Section2() {
    return (
        <Wrap>
            <div className='p-5'>
                    <div className='row'>
                            <div className='col-md-4 col-sm-12 mt-3'>
                            <UpAndDown>
                                <div className='card bg-dark text-light'>
                                    <div className='card-body text-center'>
                                        <button className='btn'>
                                            <img className='img-fluid' src='/images/home1.jpg' />
                                            <div className='text-light'>
                                                <h1 className='text-light'>Kitchen</h1>
                                                <h6 className='text-light'>This is a kitchen</h6> 
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </UpAndDown>
                            </div>
                       
                            <div className='col-md-4 col-sm-12 mt-3'>
                            <UpAndDown>
                                <div className='card bg-dark text-light'>
                                    <div className='card-body text-center'>
                                        <button className='btn'>
                                            <img className='img-fluid' src='/images/home1.jpg ' />
                                            <div className='text-light'>
                                                <h1 className='text-light'>Bathroom</h1>
                                                <h6 className='text-light'>This is a Bathroom</h6> 
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </UpAndDown>
                            </div>
                            <div className='col-md-4 col-sm-12 mt-3'>
                            <UpAndDown>
                                <div className='card bg-dark text-light'>
                                    <div className='card-body text-center'>
                                        <button className='btn'>
                                            <img className='img-fluid' src='/images/home1.jpg' />
                                            <div className='text-light'>
                                                <h1 className='text-light'>Basement</h1>
                                                <h6 className='text-light'>This is a Basement</h6> 
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                </UpAndDown> 
                            </div>
                    </div>
                </div>
                
                <div className='container'>
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
    //animation: animateDown infinite 1.5s;
`
const UpAndDown = styled.div`
    &:hover{
        animation: animateDown infinite 1.5s;  
    }
  
`
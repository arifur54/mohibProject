import React from 'react'
import styled from 'styled-components';

// About Us Section+
function Section3() {
    return (
        <div className='p-5 text-center'>
            <div className='container-fluid'>
                <div className='d-sm-flex'>
                    <div>
                        <Textwrapper >
                            <h1>About us</h1>
                            <p className='lead my-4 p-3'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of
                                Lorem Ipsum.
                            </p>
                        </Textwrapper>
                    </div>

                    <img className='img-fluid w-50 d-none d-lg-block' src='/images/home1.jpg' alt="about us Image" />
                </div>
            </div>
        </div>
    )
}

export default Section3

const Textwrapper = styled.div`
    h1 {
        text-align: center;
        color: black;
        font-family: 'Aboreto', cursive;
        margin-top: 10%;
    }
    p{
        text-align: start;
        color: black;
    }
    
`
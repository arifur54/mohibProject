import React from 'react'
import styled from 'styled-components';

function projects(props) {
    let img = props.images;
    let type = props.type;
    let title = props.title;
    const OurProjectWrapper = styled.div`
    background-image: url("${img}");
    padding-top: 3em;
    padding-bottom: 3em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    h1{
        opacity: 80%;
        padding: 1.5em;
        color: white;
        margin-bottom: 0px;
        text-shadow: 1px 1px #000000;
        animation: glow 10s ease-in-out infinite alternate;
    }

`
    return (
        <Wrapper>
            <OurProjectWrapper>
                <h1 className="text-center display-4 ">{type}</h1>
            </OurProjectWrapper>
            <div className='container'>
                <h2>{title}</h2>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img className='img-fluid' src='/images/home1.jpg' />
                    </div>
                    <div>
                        <img className='img-fluid' src='/images/home1.jpg' />
                    </div>
                    <div>
                        <img className='img-fluid' src='/images/home1.jpg' />
                    </div>
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                    <img className='img-fluid' src='/images/home1.jpg' />
                </div>
            </div>
        </Wrapper>
    )
}

export default projects

const Wrapper = styled.div`
    background-color: hsl(218, 41%, 15%);
    padding-bottom: 5em;
    background-image: radial-gradient(
        650px circle at 0% 0%, 
        hsl(218, 41%, 35%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%
    ),
    radial-gradient(
        1250px circle at 100% 100%, 
        hsl(218, 41%, 45%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%
    );

    h2 {
        opacity: 90%;
        color: white;
    }

    img {
        padding: 2px;
        height: 25vh;
        width: 100wh;
    }
`
import React from 'react'
import styled from 'styled-components';


export default function Review() {
  return (
    <Wrapper>
        <OurProjectWrapper>
            <h1>Please Let us know how we did?</h1>
        </OurProjectWrapper>
        <div className='container'>
              <ImageBody>

              </ImageBody>
        </div>
       
    </Wrapper>
  )
}


const OurProjectWrapper = styled.div`
display: flex;
Flex-direction: column;
justify-content: start;
background-image: url(images/reviewImg.webp);
padding-top: 10em;
padding-bottom: 10em;
background-size: cover;
background-position: 5% 55%;
background-repeat: no-repeat;
h1{
    justify-content: center;
    opacity: 80%;
    color: white;
    margin-bottom: 0px;
    text-shadow: 1px 1px #000000;
    animation: glow 10s ease-in-out infinite alternate;
}
` 
const Wrapper = styled.div`
    // background-color: rgb(30 58 138);
    height: 80vh;
`

const ImageBody = styled.div`
    justify-content: bottom;
    background-image: url(images/reviewImg.webp);
    background-size: cover;
    // padding-top: 100em;
    // padding-bottom: 10em;
    background-repeat: no-repeat;

`
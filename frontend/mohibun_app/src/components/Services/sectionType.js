import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

function sectionT(props) {
  let type = props.type;
  let title = props.title;
  let paragraph = props.paragraph;
  let img = props.images;

  const OurServiceWrapper = styled.div`
    background-image: url("${img}");
    padding-top: 3em;
    padding-bottom: 3em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    h1{
        text-shadow: 1px 1px #000000;
        animation: glow 10s ease-in-out infinite alternate;
    }

`
  return (
    <Wrapper>
       <OurServiceWrapper>
          <h1  className="text-center display-4 ">{type }</h1>
        </OurServiceWrapper>
        <div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='d-none d-sm-block'>
              <img className='img-fluid' src='/images/home1.jpg' />
            </div>
            <div className='d-none d-sm-block'>
              <img className='img-fluid' src='/images/home1.jpg' />
            </div>
            <div className='d-none d-lg-block'>
              <img className='img-fluid' src='/images/home_renovation.jpg' />
            </div>
            <div className='d-none d-lg-block'>
              <img className='img-fluid' src='/images/file17.jpeg' /> 
            </div>
          </div>

        <div className='container'>
          <h2 className='opacity-80'>{title}</h2>
          <p className='opacity-70'>{paragraph}</p>
          <Link className='btn' id="btn-custom" to="#">Click here More info</Link>
        </div>
      </div>
    </Wrapper>
  )
}

// function AltDiv(props)
// {
//   let textColour = props.text_colour;
//   let type = props.type;
//   let para = props.paragraph;
//   console.log(props.textCol)
//   return(
//     <div>
//       <h1>Hello </h1>
//       {/* <h1 className={`${textColour}`}>{type}</h1>
//       <p className={`${textColour}`}>{para}</p> */}
//     </div>
//   )
// }

// function CondaltDiv(props){
//   // console.log(props.alter)
//   if(props.alter===true){
//     return <AltDiv  />
//   }else{
//     return <AltDiv />
//   }
  
// }


export default sectionT;



const Wrapper = styled.div`
  background-color: hsl(210, 47%, 61%);
  padding-bottom: 5em;
  // background-image: radial-gradient(
  //     650px circle at 0% 0%, 
  //     hsl(210, 47%, 70%) 15%,
  //     hsl(210, 47%, 60%) 35%,
  //     hsl(210, 47%, 50%) 75%,
  //     hsl(210, 47%, 40%) 80%,
  //     transparent 100%
  // ),
  // radial-gradient(
  //     1250px circle at 100% 100%, 
  //     hsl(210, 47%, 70%) 15%,
  //     hsl(210, 47%, 60%) 35%,
  //     hsl(210, 47%, 50%) 75%,
  //     hsl(210, 47%, 50%) 80%,
  //     transparent 100%
  // );
  h1{
    opacity: 80%;
    padding: 1.5em;
    color: white;
    margin-bottom: 0px;
    
  }

  h2{
    opacity: 90%;
    color: white;
    padding-top:2em;
    padding-bottom: 1em;
    font-size: 3em;
  }
  p{
    opacity: 80%;
    color: white;
    font-size: 1.5em;
  }
  img {
    padding: 2px;
    height: 35vh;
    width: 90vw;
  }
`




/*
 if (alternet === 'true') {
              // <div className='col'>
              //   <h1 className={`${textColour}`}>{type}</h1>
              //   <p className={`${textColour}`}>{para}</p>
              // </div>
              console.log('this true')
            } else {
              // <div className='col'>
              //   <h1 className={`${textColour}`}>{type}</h1>
              //   <p className={`${textColour}`}>{para}</p>
              // </div>
              console.log('this false')
            }



*/
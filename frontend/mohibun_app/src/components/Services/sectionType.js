import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function sectionT(props) {
  let type = props.type;
  let title = props.title;
  let paragraph = props.paragraph;
  let img1, img2, img3, img4, img5;

  for(let x = 0; x < props.images.length; x++){
    img1 = props.images[0];
    img2 = props.images[1];
    img3 = props.images[2];
    img4 = props.images[3];
    img5 = props.images[4];
}


  const OurServiceWrapper = styled.div`
    background-image: url("${img1}");
    padding-top: 3em;
    padding-bottom: 3em;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    h1{
        font-family: 'Josefin Sans', sans-serif;
        color: aliceblue;
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
          <TitleWrapper>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='d-none d-sm-block'>
              <img className='img-fluid' src={img2} />
            </div>
            <div className='d-none d-sm-block'>
              <img className='img-fluid' src={img3} />
            </div>
            <div className='d-none d-lg-block'>
              <img className='img-fluid' src={img4} />
            </div>
            <div className='d-none d-lg-block'>
              <img className='img-fluid' src={img5} /> 
            </div>
          </div>
          </TitleWrapper>
        <div className='container'>
          <h2>{title}</h2>
          <p>{paragraph}</p>
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
  background-color: #d4c0b0;
  padding-bottom: 5em;
  
  h1{
    opacity: 80%;
    padding: 1.5em;
    color: black;
    margin-bottom: 0px;
    
  }

  h2{
    opacity: 90%;
    color: black;
    padding-top:2em;
    padding-bottom: 1em;
    font-size: 3em;
    font-family: 'Aboreto', cursive;
    font-weight: bold;
  }
  p{
    opacity: 80%;
    color: black;
    font-size: 1.5em;
  }
  img {
    padding: 2px;
    height: 35vh;
    width: 90vw;
  }
`

const TitleWrapper = styled.div`
 background-color: rgb(44, 44, 44);

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
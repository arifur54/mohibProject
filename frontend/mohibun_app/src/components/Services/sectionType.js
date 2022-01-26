import React from 'react';
import styled from 'styled-components';

function kitchen(props) {
  let bgColour = props.bg_colour;
  let textColour = props.text_colour;
  // console.log(alternet)
  return (
    <Wrapper>
      <div className={`${bgColour}`}>
        <div className='row'>
          <div className='col'>
            <CondaltDiv 
            textCol={textColour}
            alter={false} />
          </div>
          <div className='col'>
            <CondaltDiv alter={true} />  
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

function AltDiv(props)
{
  let textColour = props.text_colour;
  let type = props.type;
  let para = props.paragraph;
  console.log(props.textCol)
  return(
    <div>
      <h1>Hello </h1>
      {/* <h1 className={`${textColour}`}>{type}</h1>
      <p className={`${textColour}`}>{para}</p> */}
    </div>
  )
}

function CondaltDiv(props){
  // console.log(props.alter)
  if(props.alter===true){
    return <AltDiv  />
  }else{
    return <AltDiv />
  }
  
}


export default kitchen;



const Wrapper = styled.div`

  h1{

    margin-bottom: 0px;
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
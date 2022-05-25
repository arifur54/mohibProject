import React from 'react'
import styled from 'styled-components';

export default function Login() {
  return (
    <Wrapper>
        <h2 className='mb-5'>Admin Login</h2>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-2 col-xs-2'>

              </div>
              <div className='col-lg-4 col-md-4 col-sm-8 col-xs-8'>
                <form>
                      <div className="mb-3">
                          <label className="form-label">Email address</label>
                            <input type="text" className='form-control'></input>
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input className='form-control' type="password"></input>
                      </div>
                        
                      <button type="button" className="btn btn-primary">Login</button>
                </form>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-2 col-xs-2'>

              </div>
            </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    background-color: hsl(218, 41%, 15%);
    padding-bottom: 5em;
    padding-top: 10em;
    height: 80vh;
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
        padding-top: 25px;
        opacity: 90%;
        color: white;
    }
    label {
        color: white;
    }
    img {
        padding: 2px;
        height: 25vh;
        width: 100wh;
    }

    button:{
        flex: none;
    }

    button:hover{
        background-color: #f0f0f5;
        opacity: 80%;
    }
`
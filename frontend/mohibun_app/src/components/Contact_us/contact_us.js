import React from 'react'
import styled from 'styled-components';


function contact_us() {

    const OurProjectWrapper = styled.div`
    background-image: url(images/contact-us-phone.jpg);
    padding-top: 25em;
    padding-bottom: 5em;
    background-size: cover;
    background-position: 5% 35%;
    background-repeat: no-repeat;
    margin-bottom: 25px;
    // h1{
    //     opacity: 80%;
    //     padding: 1.5em;
    //     color: white;
    //     margin-bottom: 0px;
    //     text-shadow: 1px 1px #000000;
    //     animation: glow 10s ease-in-out infinite alternate;
    // }
`
    return (
        <Wrapper>
            <OurProjectWrapper>
            </OurProjectWrapper>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 ps-0 pe-0'>
                        <LeftSide>
                            <h3>Our Phone Number</h3>
                            <p>Home - 6471110000 </p>
                            <p>Work - 6471110000 </p>
                            <p>Personal - 6471110000 </p>
                            <h3>Hours of Operation</h3>
                            <p>Monday - friday: 9:00 Am to 5:00 PM</p>
                            <p>Saturday - Sunday: 9:00 Am to 5:00 PM</p>
                        </LeftSide>
                    </div>
                    <div className='col-md-8 ps-0 pe-0'>
                        <RigtSide>
                            <h3>Contact us/Get A Quote</h3>
                            <form>
                                <div className='row'>
                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputFName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="inputFName" aria-describedby="Name" />
                                    </div>
                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputLName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="inputLName" aria-describedby="Name" />
                                    </div>
                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="email" />
                                    </div>
                                    <div className='mb-3 col-md-6 text-start'>
                                        <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="inputPhone" aria-describedby="phone" />
                                    </div>
                                    <div className='mb-3 text-start'>
                                        <label htmlFor="inputOption" className="form-label">I am a</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option defaultValue={"1"}>Select An Option</option>
                                            <option defaultValue={"1"}>Home Owner</option>
                                            <option defaultValue={"1"}>Vendor</option>
                                            <option defaultValue={"1"}>Contactor</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="inputMessage" className="form-label">Write to us!</label>
                                        <textarea className="form-control" id="inputMessage" rows="4"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </RigtSide>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default contact_us



const Wrapper = styled.div`
    background-color: hsl(210, 47%, 61%);
    padding-bottom: 5em;
    background-image: radial-gradient(
        650px circle at 0% 0%, 
        hsl(210, 47%, 70%) 15%,
        hsl(210, 47%, 60%) 35%,
        hsl(210, 47%, 50%) 75%,
        hsl(210, 47%, 50%) 80%,
        transparent 100%
    ),
    radial-gradient(
        1250px circle at 100% 100%, 
        hsl(210, 47%, 70%) 15%,
        hsl(210, 47%, 60%) 35%,
        hsl(210, 47%, 50%) 75%,
        hsl(210, 47%, 50%) 80%,
        transparent 100%
    );

    h2 {
        text-align: left;
        opacity: 90%;
        color: white;
    }

    label {
        opacity: 90%;
        color: black;  
    }

    button:{
        flex: none;
    }

    button:hover{
        background-color: #f0f0f5;
        opacity: 80%;
    }

`

const LeftSide = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    padding: 25px;
    text-align: left;
    h3 {
        text-align: left;
        margin: 25px;
        opacity: 90%;
        color: white;
    }

    p {
        text-align: left;
        opacity: 90%;
        color: white;  
        margin-left: 8%;
    }
`
const RigtSide = styled.div`
    background-color: white;
    height: 100%;
    width: 100%;
    padding: 25px;
    text-align: left;
    h3 {
        text-align: left;
        opacity: 90%;
        color: black;
    }
`
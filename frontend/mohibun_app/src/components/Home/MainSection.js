import React from 'react'
import styled  from 'styled-components';


function MainSection() {
    return (
        <Wrap>
            <ItemText>
                <div className='container'>
                    <h3 className="display-3"> Welcome To </h3>
                    <h4> Mk builders</h4>
                    <p> Your one stop shop to all of your home renovation needs </p>
                </div>
            </ItemText>
            <Downarrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default MainSection

const Wrap = styled.div`
    width: 100vw;
    height: 93vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/home1.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const ItemText = styled.div`
    padding-top: 20vh;
    text-align: center;
    h3 {
        color: rgb(42, 42, 42);
        font-size: 9em;
        padding: 5px;
        font-family: 'Bebas Neue', cursive;
        text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
        10px 20px 5px rgba(0,0,0,0.05),
        -10px 20px 5px rgba(0,0,0,0.05);
    }

    h4 {
        color: rgb(42, 42, 42);
        font-size: 7em;
        padding: 5px;
        font-family: 'Staatliches', cursive;
        text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
        10px 20px 5px rgba(0,0,0,0.05),
        -10px 20px 5px rgba(0,0,0,0.05);
    }

    p {
       color: rgb(60, 61, 61);
       font-size: 2.5em;
       font-family: 'Staatliches', cursive;
       text-shadow: 2px 4px 4px rgba(255,255,255,1),
       0px -5px 10px rgba(255,255,255,0.2);
    }

    @media only screen and (max-width: 775px) {
        margin-top: 5%;
        h3 {
            color: rgb(42, 42, 42);
            font-size: 15vw;
            padding: 5px;
            font-family: 'Bebas Neue', cursive;
            text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
            10px 20px 5px rgba(0,0,0,0.05),
            -10px 20px 5px rgba(0,0,0,0.05);
        } 

        h4 {
            color: rgb(42, 42, 42);
            font-size: 13vw;
            padding: 5px;
            font-family: 'Staatliches', cursive;
            text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
            10px 20px 5px rgba(0,0,0,0.05),
            -10px 20px 5px rgba(0,0,0,0.05);
        }

        p {
            color: rgb(60, 61, 61);
            font-size: 5vw;
            padding: 2% 8%;
            font-family: 'Staatliches', cursive;
            text-shadow: 2px 4px 4px rgba(255,255,255,1),
            0px -5px 10px rgba(255,255,255,0.2);
         }
    }
    
`

const imageLogo = styled.img `
    
`
const Downarrow = styled.img`
    height: 100px;
    margin: 70px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

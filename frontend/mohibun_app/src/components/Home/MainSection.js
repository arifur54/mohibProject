import React from 'react'
import styled  from 'styled-components';


function MainSection() {
    return (
        <Wrap>
            <ItemText>
                <h1 bg="white"> Temp Data</h1>
                <p> Temp data continued </p>
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
    h1 {
        color: rgb(247, 245, 245);
        font-size: 10em;
        padding: 5px;
        font-family: 'Bebas Neue', cursive;
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
`

const Downarrow = styled.img`
    height: 100px;
    margin: 70px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

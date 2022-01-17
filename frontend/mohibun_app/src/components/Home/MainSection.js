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
    height: 100vh;
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
        color: #fff;
        font-size: 5em;
        padding: 20px;
        margin: 11px;
    }

    p {
       color: rgb(60, 61, 61);;
       font-size: 2.5em;
    }
`

const Downarrow = styled.img`
    height: 100px;
    margin: 100px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
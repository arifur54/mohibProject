import React from 'react'
import styled from "styled-components";

export default function Loading() {
  return (
    <Wrapper>
        <Waviy>
            <span style={{"--i":"1"}}>L </span>
            <span style={{"--i":"2"}}>o </span>
            <span style={{"--i":"3"}}>a </span>
            <span style={{"--i":"4"}}>d </span>
            <span style={{"--i":"5"}}>i </span>
            <span style={{"--i":"6"}}>n </span>
            <span style={{"--i":"7"}}>g </span>
            <span style={{"--i":"8"}}>. </span>
            <span style={{"--i":"9"}}>. </span>
            <span style={{"--i":"10"}}>. </span>
        </Waviy>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const Waviy = styled.div`
    position: relative;

    span {
        position: relative;
        display: inline-block;
        font-size: 60px;
        color: #fff;
        text-transform: uppercase;
        animation: flip 2s infinite;
        animation-delay: calc(.2s * var(--i))
    }

    @keyframes flip {
        0%,80% {
          transform: rotateY(360deg) 
        }
    }
`

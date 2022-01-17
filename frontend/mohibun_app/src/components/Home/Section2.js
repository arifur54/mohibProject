import React from 'react'
import styled  from 'styled-components';

function Section2() {
    return (
        <Wrap>
            <p className='text-success'>primary</p>
        </Wrap>
    )
}

export default Section2

const Wrap = styled.div`
width: 100vw;
height: 50vh;
`
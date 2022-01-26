import React from 'react';
import SectionType from './sectionType'
import styled from 'styled-components';


function services() {
    return (
        <div>
            <OurServiceWrapper>
                <h1 className='text-white'>Our Service</h1>
            </OurServiceWrapper>
            <SectionType
                bg_colour='bg-dark'
                text_colour='text-white'
                // alter="true"
                type='Kitchen Renovations'
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
            />

            <SectionType
                bg_colour='bg-white'
                text_colour='text-dark'
                // alter="false"
                type='Bathroom Renovations'
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
            />
            <SectionType
                bg_colour='bg-dark'
                text_colour='text-white'
                // alter="true"
                type='Basement Renovations'
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
            />

            <SectionType
                bg_colour='bg-white'
                text_colour='text-dark'
                // alter="false"
                type='Full House Renovations'
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
            />
        </div>
    )
}

export default services

const OurServiceWrapper = styled.div`
    background-image: url('/images/home1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    h1{
        padding: 2.5em;
        margin-bottom: 0;
        text-shadow: 1px 1px #000000;
        animation: glow 10s ease-in-out infinite alternate;
    }

`
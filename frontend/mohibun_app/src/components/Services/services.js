import React from 'react';
import SectionType from './sectionType'
import styled from 'styled-components';
import Services_kitchen from './services_kitchen';
import Services_bathroom from './services_bathroom';


function services() {
    return (
        <div>
            <OurServiceWrapper>
                <h1 className='text-white'>Our Service</h1>
            </OurServiceWrapper>
            <Services_kitchen />
            <Services_bathroom />
            {/* <SectionType
                bg_colour='bg-dark'
                text_colour='text-white'
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
                type='Full House Renovations'
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
                images='/images/file17.jpeg'
            /> */}
        </div>
    )
}

export default services

const OurServiceWrapper = styled.div`
    background-image: url('/images/file17.jpeg');
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
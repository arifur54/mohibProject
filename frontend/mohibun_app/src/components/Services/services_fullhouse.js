import React from 'react';
import SectionType from './sectionType'

function services_fullhouse() {
  return (
      <div>
         <SectionType
              type='Whole House Renovations'
              title="This is the Whole House title"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
                images={['/images/whole_house_4.webp', '/images/whole_house.jpg','/images/whole_house_3.jpg','/images/whole_house_5.jpg', '/images/whole_house_6.jpg']}
          />
      </div>
  );
}

export default services_fullhouse;

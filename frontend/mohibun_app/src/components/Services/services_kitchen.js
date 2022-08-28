import React from 'react';
import SectionType from './sectionType'

function services_kitchen() {
  return (
      <div>
          <SectionType
              type='Kitchen Renovations'
              title="This is the kitchen title"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
                images={['/images/kitchen_3.webp', '/images/file20.jpg','/images/kitchen_2.webp','/images/kitchen_4.jpg', '/images/kitchen_5.jpg']}
          />
      </div>
    
    
    );
}

export default services_kitchen;

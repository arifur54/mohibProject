import React from 'react';
import SectionType from './sectionType'

function services_fullhouse() {
  return (
      <div>
         <SectionType
              type='Whole House Renovations'
              title="Let's transform your house into a dream house"
              paragraph1="Your home is your sanctuary, and it should reflect your personal style and taste. At our home renovation company, we specialize in creating the most luxurious and stylish interiors, outside patios and pools."
              paragraph2="Our team of expert designers and craftsmen will work with you to create an interior and outside patio that are both functional and beautiful. Whether you want a traditional or contemporary look, we have the experience and expertise to make your dream space a reality. From custom kitchen and bathroom designs to complete home makeovers, we can handle any project, big or small."
              paragraph3="On the interior, we can incorporate high-end finishes and features such as marble countertops, hardwood floors, custom cabinetry, and state-of-the-art appliances. We can also help you design and build custom entertainment centers, home theaters, and other spaces that are tailored to your lifestyle."
              paragraph4="On the exterior, we can help you create a beautiful and functional outdoor living space, complete with a patio, deck, or pergola. We can also help you with landscaping, outdoor lighting, and other features that will enhance the curb appeal of your home. With our help, you can turn your house into a luxurious and stylish oasis that you'll never want to leave."
              paragraph5="With our help, you can turn your house into a luxurious and stylish oasis that you'll never want to leave. Contact us today to schedule a consultation and start planning your dream interior and outside patio renovation."
              images={['/images/whole_house_4.webp', '/images/whole_house.jpg','/images/whole_house_3.jpg','/images/whole_house_5.jpg', '/images/whole_house_6.jpg']}
              link="/projects/fullhouse"
          />
      </div>
  );
}

export default services_fullhouse;

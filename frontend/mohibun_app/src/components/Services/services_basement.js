import React from 'react';
import SectionType from './sectionType'

function services_basement() {
  return (
    <div>
        <SectionType
              type='Basement Renovations'
              title="From unused space to unforgettable: let's create the basement of your dreams"
              paragraph1="The basement is often overlooked as a potential living space, but with the right design and renovation, it can be transformed into a luxurious and stylish retreat. At our home renovation company, we specialize in creating the most luxurious and stylish basements in the world."
              paragraph2="Our team of expert designers and craftsmen will work with you to create a basement that is both functional and beautiful. Whether you want a home theater, a game room, a guest suite, or something else entirely, we have the experience and expertise to make your dream basement a reality. From custom lighting and flooring to built-in cabinetry and entertainment systems, we can incorporate all the latest features and amenities into your basement design."
              paragraph3="At MK builders, we understand that luxury is not just about aesthetics, it's also about functionality. That's why we pay attention to every detail, from the placement of outlets and light switches to the flow of the space. We want your basement to be not only beautiful, but also comfortable and easy to use."
              paragraph4="Whether you want to add a few extra rooms or completely transform your basement, our team has the experience and expertise to make your vision a reality."
              paragraph5="Contact us today to schedule a consultation and start planning your dream basement renovation."
              images={['/images/basement_5.webp', '/images/basement_2.webp','/images/basement_3.jpg','/images/basement_4.webp', '/images/finishedbasement.jpg']}
              link="/projects/Basement"
          />
    </div>
  );
}

export default services_basement;

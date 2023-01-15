import React from 'react';
import SectionType from './sectionType'

function services_bathroom() {
  return (
    <div>
      <SectionType
              type='Bathroom Renovations'
              title="Let's create your personalized bathroom to suit your unique style and needs"
              paragraph1="The bathroom is a luxurious retreat where you can escape the hustle and bustle of daily life. It's a place where you can pamper yourself and indulge your senses. The bathroom is a sanctuary where you can unwind and recharge."
              paragraph2="Bathroom design has come a long way in recent years. In the past, bathrooms were often small, outdated, and lacking in luxury. Today, however, they are often designed to be spacious, modern, and opulent. This change is due, in part, to the increasing popularity of high-end bathroom renovations. A well-designed bathroom can add value to your home and provide a luxurious escape from the outside world."
              paragraph3="At MK builders, we strive to create the most beautiful and luxurious bathrooms of your imagination. We use only the finest materials and the latest technology to design and build bathrooms that are truly one-of-a-kind. Our team of expert designers and craftsmen will work with you to create a bathroom that is both functional and beautiful, and that reflects your personal sense of style."
              paragraph4="Whether you want a traditional or contemporary look, we have the experience and expertise to make your dream bathroom a reality. From marble countertops and soaking tubs to heated floors and rain showers, we can incorporate all the latest features and amenities into your bathroom design. We can also help you with custom cabinetry, lighting, and other details that will make your bathroom truly unique."
              paragraph5="Contact us today to schedule a consultation and start planning your dream bathroom renovation."
              images={['/images/bathroom_7.jpg', '/images/bathroom_3.jpg','/images/bathroom.webp','/images/bathroom_5.jpg', '/images/bathroom_6.jpg']}
              link="/projects/bathroom"
          />
    </div>
    
    
    
    );
}

export default services_bathroom;

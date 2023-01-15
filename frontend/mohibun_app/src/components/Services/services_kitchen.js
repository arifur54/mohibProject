import React from 'react';
import SectionType from './sectionType'

function services_kitchen() {
  return (
      <div>
          <SectionType
              type='Kitchen Renovations'
              title="Let's Transforming Your Kitchen into a Masterpiece!"
              paragraph1="A kitchen is a special room where family and friends gather to create lasting memories. It's a place where laughter and love abound. The kitchen is the heart of the home. It's a place where memories are made and shared.
              It's a place of comfort and healing. The kitchen is a place of hope and happiness."
              paragraph2="Kitchen design has come a long way in recent years. In the past, kitchens were small, dark, and cramped. Today, however, they are often large, light, and airy. This change is due, in part, to the popularity of open floor plans. 
              kitchens are now often seen as the heart of the home, and as such, they are designed to be both functional and stylish."
              paragraph3="One of the most popular trends in kitchen design is the use of white. White cabinets, countertops, and walls reflect light and make the space seem bigger. Another popular trend is the use of stainless steel appliances. 
              These not only look sleek and modern, but they are also easy to keep clean."
              paragraph4="Another popular trend is the use of natural materials. Stone countertops, for example, add a touch of luxury to any kitchen. Wood floors are also popular, as they add warmth to the space. Finally, kitchens are now often equipped with the latest in technology. Smart appliances, for example, can make cooking and cleaning easier than ever before. "
              paragraph5="Contact us today to schedule a consultation and start planning your dream kitchen renovation."
              images={['/images/kitchen_3.webp', '/images/file20.jpg','/images/kitchen_2.webp','/images/kitchen_4.jpg', '/images/kitchen_5.jpg']}
              link="/projects/kitchen"
          />
      </div>
    
    
    );
}

export default services_kitchen;

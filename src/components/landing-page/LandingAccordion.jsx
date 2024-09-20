// 'use client';
// import React, { useState } from 'react';
// import LandingAccordionData from '@data/LandingAccordionData';
// import Image from 'next/image';
// import plus from '@public/images/landing/accordion/plus.png';
// import minus from '@public/images/landing/accordion/minus.png';

// export const LandingAccordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null); // Track which accordion item is open

//   const toggleAccordion = (index) => {
//     // If the clicked item is already open, close it; otherwise, open it
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className='landing-accordion'>
//       <div className='landing-accordion-container'>
//         <div className='landing-accordion-heading'>
//           <h2>Get the latest and the best articles in your sector</h2>
//         </div>
//         <div className='landing-accordion-content'>
//           {LandingAccordionData.map((item, index) => (
//             <div className='landing-accordion-box' key={index}>
//               <h3 onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer' }}>
//                 {item.title}
//                 {activeIndex === index ? (
//                   <Image src={minus} alt="Collapse" />
//                 ) : (
//                   <Image src={plus} alt="Expand" />
//                 )}
//               </h3>
//               {activeIndex === index && <p>{item.para}</p>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


'use client';
import React, { useState } from 'react';
import LandingAccordionData from '@data/LandingAccordionData';
import Image from 'next/image';
import arrowImage from '@public/Images/landing/accordion/arrow.png';

export const LandingAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion item is open

  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it; otherwise, open it
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='landing-accordion'>
      <div className='landing-accordion-container'>
        <div className='landing-accordion-heading'>
          <h2>Get the latest and the best articles in your sector</h2>
        </div>
        <div className='landing-accordion-content'>
          {LandingAccordionData.map((item, index) => (
            <div className='landing-accordion-box' key={index}>
              <h3 onClick={() => toggleAccordion(index)} style={{ cursor: 'pointer' }}>
                {item.title}
                  <Image src={arrowImage} alt="Collapse" />
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

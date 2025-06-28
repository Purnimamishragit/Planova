// import React from 'react';
// import './Value.css'; 
// import{
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
//     AccordionItemState
// }from 'react-accessible-accordion';
// import "react-accessible-accordion/dist/fancy-example.css";
// import "react-accessible-accordion/dist/fancy-example.css";
// import {MdOutlineArrowDropDown} from 'react-icons/md';
// import data from '../../utils/accordion';
// const Value = () => {
//   return (
//     <section className="v-wrapper">
//       <div className="paddings innerWidth flexCenter v-container">
//         {/* left side */}
//         <div className="v-left">
//           <div className="image-container">
//             <img src="./value.png" alt=""/>
//           </div>
//         </div>
//         {/* right side */}
//         <div className="flexColStart v-right">
//           <span className="orangeText">Our Value</span>
//           <span className="primaryText">Value We Give To You</span>
//           <span className="secondaryText">We always ready to help by providing the best service for you.<br />We believe a good place to love can make your life better</span>
          


//           <Accordion
//           className="accordion"
//           allowMultipleExpanded={false}
//           preExpanded={[0]}
//           >
//             {
//               data.map((item,i)=>{
//                 return(
//                   <AccordionItem className="accordionItem" key={i} uuid={i}>
//                     <AccordionItemHeading>
//                       <div className="flexCenter icon">{item.icon}</div>
//                       <span className="primaryText">
//                         {item.heading}
//                       </span>
//                       <div className="flexCenter icon">
//                         <MdOutlineArrowDropDown size={20}/>
//                       </div>
//                     </AccordionItemHeading>
                    
//                   </AccordionItem>
//                 )
//               })
//             }
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Value;
import React from 'react';
import './Value.css'; 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt=""/>
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you.<br />
            We believe a good place to love can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemState>
                    {({ expanded }) => (
                      <AccordionItemButton className={`flexCenter accordionButton ${expanded ? 'expanded' : 'collapsed'}`}>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    )}
                  </AccordionItemState>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

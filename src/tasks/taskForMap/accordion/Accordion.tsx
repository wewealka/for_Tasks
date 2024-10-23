import { dataAccordion } from "../../../data/AccordionData";
import { SingleAccordion } from "./singleAccordion/SingleAccordion";

export function Accordion() {
  return (
    <div>
      {dataAccordion.map((SA, index) => (
        <div key={index}>
          <SingleAccordion 
          title={SA.title}
          accordionBody={SA.accordionBody} />
        </div>
      ))}
    </div>
  )
}

// import { useState } from "react";
// import { AccordionPropsType, dataAccordion } from "../../../data/AccordionData";
// import { SingleAccordion } from "./singleAccordion/SingleAccordion";

// export function Accordion() {
//   let [TOG, setTOG] = useState(false)

//   return (
//     <div>
//       {dataAccordion.map((SA:AccordionPropsType, index) => (
//         <div key={index}>
//           <SingleAccordion 
//           TOG ={TOG}
//           setTOG = {setTOG}
//           props={SA}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }
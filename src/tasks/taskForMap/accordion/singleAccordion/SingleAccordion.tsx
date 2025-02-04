import { useState } from "react";

import { AccordionBodyType, AccordionPropsType } from "../../../../data/AccordionData";

export function SingleAccordion(props: AccordionPropsType) {

    const Covered = false 
    let [stateClps, setStateClps] = useState(props.accordionBody)
    let [TOG, setTOG] = useState(Covered)

    const clpsHandlerOn = () => {
        const newTOG = (!TOG)
        setTOG(newTOG)
        setStateClps( newTOG ? [] : props.accordionBody)
        
    }
    return (
        <div>
            <h3 style={{cursor: "pointer", width: "30px"}} onClick={clpsHandlerOn}>{props.title} <div>{!TOG ? "uncovered" :"covered"}</div></h3>
            <ul>
                {stateClps.map((AccordionBody: AccordionBodyType) => (
                    <li key={AccordionBody.id} >
                        {AccordionBody.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}



// import { useState } from "react";
// import { AccordionBodyType, AccordionPropsType } from "../../../../data/AccordionData";
// type SingleAcc = {
//     props:AccordionPropsType
//     TOG:boolean
//     setTOG: React.Dispatch<React.SetStateAction<boolean>>
// }
// export function SingleAccordion(p:SingleAcc) {
//     let [stateClps, setStateClps] = useState(p.props.accordionBody)
//     const clpsHandlerOn = () => {
//         const newTOG = (!p.TOG)
//         p.setTOG(newTOG)
//         setStateClps( newTOG ? [] : p.props.accordionBody)        
//     }
//     return (
//         <div>
//             <h3 style={{cursor: "pointer", width: "30px"}} onClick={clpsHandlerOn}>{p.props.title} </h3>
//             <ul>
//                 {stateClps.map((AccordionBody: AccordionBodyType) => (
//                     <li key={AccordionBody.id} >
//                         {AccordionBody.content}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

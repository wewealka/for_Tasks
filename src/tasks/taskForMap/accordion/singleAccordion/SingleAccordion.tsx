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
            <h3 style={{cursor: "pointer", width: "30px"}} onClick={clpsHandlerOn}>{props.title}</h3>
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

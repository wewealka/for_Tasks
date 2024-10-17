import { useState } from "react";
import { MainButton } from "../../../../components/Button";

import { AccordionBodyType, AccordionPropsType } from "../../../../data/AccordionData";

export function SingleAccordion(props: AccordionPropsType) {

    let [stateClps, setStateClps] = useState(props.accordionBody)
    const clpsHandlerOn = () => {
        setStateClps([])
    }
    const clpsHandlerOff = () => {
        setStateClps(props.accordionBody)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <ul >
                <MainButton name={"covered"} callBack={clpsHandlerOn} />
                <MainButton name={"Uncovered"} callBack={clpsHandlerOff} />
                {stateClps.map((AccordionBody: AccordionBodyType) => (
                    <li key={AccordionBody.id}>
                        {AccordionBody.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}

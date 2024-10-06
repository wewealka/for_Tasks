import { AccordionBodyType, AccordionPropsType } from "../../../../data/AccordionData";

export function SingleAccordion(props: AccordionPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            {!props.collapsed && (
                <ul >
                {props.accordionBody.map((AccordionBody: AccordionBodyType) => (
                    <li key={AccordionBody.id}>{AccordionBody.content}</li>
                ))}
            </ul>
            )}
        </div>
    )
}

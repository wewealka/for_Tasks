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
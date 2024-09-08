
export type AccordionBodyType = {
    id: number
    content: string
  }
  
  export type AccordionPropsType= {
    title:string,
    AccordionBody:Array<AccordionBodyType>
  }
  
  
  
  export let dataAccordion: AccordionPropsType = { 
    title: "Menu",
    AccordionBody: [
      { id: 1, content: "1" },
      { id: 2, content: "2" },
      { id: 3, content: "3" },
    ],
  };
    
    
  
export function Accordion(props:AccordionPropsType) {
    return (
      <div>
        <h3>{props.title}</h3>
        <ul >
        {props.AccordionBody.map ((AccordionBody:AccordionBodyType)=>(
          <li key={AccordionBody.id}>{AccordionBody.content}</li>
        ))}
        </ul>
      </div>
    )
}
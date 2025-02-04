import { useState } from "react"
import { AccordionBodyType } from "../../../data/AccordionData"
import { AccordionPropsType } from "./AccordionDataM"

export type AccordionMPT = {
    data: AccordionPropsType[]
    fill: boolean
}
export const AccordionM = (p: AccordionMPT) => {
    const [tog, setTog] = useState<boolean[]>(Array(p.data.length).fill(p.fill))

    const onItemClick = (id: number) => {
        alert(`User with id ${id} should be happy`);
    };

    const handler = (index: number) => {
        setTog(tog.map((t, i) => (i === index ? !t : t)))
    }
    return (
        <div>
            {p.data.map((t, index)=> (
                <div key={index}>
                    <AccordionTitle title={t.title} onChange={()=>handler(index)} />
                    {!tog[index] && <div>covered</div>}
                    {tog[index] && <AccordionBody body={t.accordionBody} onChange={onItemClick}/>}
                </div>
            ))}
        </div>
    )
}

export type AccordionTitlePT = {
    title: string

    onChange: () => void
}
export const AccordionTitle = (p: AccordionTitlePT) => {
    return (
        <h3 style={{cursor:"pointer", userSelect:"none"}} onClick={p.onChange}>
            --{p.title}--
        </h3>
    )
}

export type AccordionBodyPT = {
    body: AccordionBodyType[]
    onChange:(id:number)=>void
}
export const AccordionBody = (p: AccordionBodyPT) => {
    return (
        <div>
            {p.body.map((t) => {
                return (
                    <li key={t.id} onClick={()=>p.onChange(t.id)}>
                        {t.content}
                    </li>
                )
            })}
        </div>
    )
} 
import { useState } from "react"
import { AccordionBodyType } from "../../../data/AccordionData"
import { AccordionPropsType, } from "./AccordionDataM"

type AccordionMPT = {
    data: AccordionPropsType[]
}
export const AccordionM = (p: AccordionMPT) => {
    const [tog, setTog] = useState<boolean[]>(Array(p.data.length).fill(true))


    const handler = (index: number) => {
        setTog(tog.map((t, i) => (i === index ? !t : t)))
    }
    return (
        <div>
            {p.data.map((t, index)=> (
                <div key={index}>
                    <AccordionTitle title={t.title} onChange={()=>handler(index)} />
                    {!tog[index] && <div>covered</div>}
                    {tog[index] && <AccordionBody body={t.accordionBody}/>}
                </div>
            ))}
        </div>
    )
}

type AccordionTitlePT = {
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

type AccordionBodyPT = {
    body: AccordionBodyType[]
}
export const AccordionBody = (p: AccordionBodyPT) => {
    return (
        <div>
            {p.body.map((t) => {
                return (
                    <ul key={t.id}>
                        {t.content}
                    </ul>
                )
            })}
        </div>
    )
} 
export type AccordionBodyType = {
    id: number
    content: string
}

export type AccordionPropsType = {
    id: number
    title: string,
    accordionBody: Array<AccordionBodyType>
}



export const dataAccordionM: Array<AccordionPropsType> = [
    {
        id: 1,
        title: "Menu",
        accordionBody: [
            { id: 1, content: "1231" },
            { id: 2, content: "2213123" },
            { id: 3, content: "331231" },
        ],
    },
    {
        id: 2,
        title: "Users",
        accordionBody: [
            { id: 4, content: "User: 1" },
            { id: 5, content: "User: 2" },
            { id: 6, content: "User: 3" },
        ],
    },
];



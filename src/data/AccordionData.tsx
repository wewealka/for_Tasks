export type AccordionBodyType = {
    id: number
    content: string
}

export type AccordionPropsType = {
    title: string,
    collapsed?: boolean
    accordionBody: Array<AccordionBodyType>
}



export const dataAccordion: Array<AccordionPropsType> = [
    {
        title: "Menu",
        collapsed: false,
        accordionBody: [
            { id: 1, content: "1" },
            { id: 2, content: "2" },
            { id: 3, content: "3" },
        ],
    },
    {
        title: "Users",
        collapsed: false,
        accordionBody: [
            { id: 4, content: "User: 1" },
            { id: 5, content: "User: 2" },
            { id: 6, content: "User: 3" },
        ],
    },
];



import { Meta, StoryObj } from "@storybook/react";
import { dataAccordionM } from "./AccordionDataM";
import { AccordionBody, AccordionM, AccordionMPT, AccordionTitle } from "./AccordionM";
import { useState } from "react";

const meta: Meta<typeof AccordionM> = {
    title: "AccordionMainVersion",
    component: AccordionM,
};

export default meta;

type Story = StoryObj<typeof AccordionM>;

export const AccordionMVUsage: Story = {
    args: {
        data: dataAccordionM,
        fill: true,
    },
};


const AccordionMain = ({ fill }: { fill: boolean }) => {
    const [tog, setTog] = useState<boolean[]>(Array(dataAccordionM.length).fill(fill));
    return (
        <div>
            {dataAccordionM.map((t, index) => (
                <div key={index}>
                    <AccordionTitle title={t.title} onChange={() => {}} />
                    {!tog[index] && <div>covered</div>}
                    {tog[index] && <AccordionBody body={t.accordionBody} onChange={()=>{}}/>}
                </div>
            ))}
        </div>
    );
};


export const AccordionMainCollapsed = () => <AccordionMain fill={false} />;
export const AccordionMainUnCollapsed = () => <AccordionMain fill={true} />;
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { dataAccordion } from '../../../data/AccordionData';


const meta: Meta<typeof Accordion> = {
    title: 'Example/Accordion',
    component: Accordion,
};



type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    args: {
        data: dataAccordion,
    },
};

export default meta;



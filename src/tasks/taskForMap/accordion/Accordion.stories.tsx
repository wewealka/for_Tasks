import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionBodyType, AccordionPropsType, dataAccordion } from '../../../data/AccordionData';
import { useState } from 'react';

const meta: Meta<typeof Accordion> = {
    title: 'tests',
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;


export const DefaultAccordion: Story = {
    args: {
        data: dataAccordion,
    },
};


export function CollapsedAccordion() {
    return (
        <div>
            {dataAccordion.map((SA, index) => (
                <div key={index}>
                    <SingleAccordion
                        title={SA.title}
                        accordionBody={SA.accordionBody}
                    />
                </div>
            ))}
        </div>
    );
}


function SingleAccordion(props: AccordionPropsType) {

    let [TOG, setTOG] = useState(true)
    let [stateClps, setStateClps] = useState(TOG ? [] : props.accordionBody)


    const clpsHandlerOn = () => {
        const newTOG = (!TOG)
        setTOG(newTOG)
        setStateClps(newTOG ? [] : props.accordionBody)

    }
    return (
        <div>
            <h3 style={{ cursor: "pointer", width: "30px" }} onClick={clpsHandlerOn}>{props.title} <div>{!TOG ? "uncovered" : "covered"}</div></h3>
            <ul>
                {stateClps.map((AccordionBody: AccordionBodyType) => (
                    <li key={AccordionBody.id} >
                        {AccordionBody.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export function Setterrender() {
    return <Setter count={0} />
}

type SetterType = {
    count: number;
}

function Setter(p: SetterType) {
    let [start, setCount] = useState(p.count);

    const fallBack = () => {
        alert("Reached the limit of 5.")
    }
    const onClickHandler = () => {
        start < 5 ? setCount(start + 1) : fallBack()
    }
    const onResClickHandler = () => {
        setCount(p.count);
    }
    const buttonStyle = { background: start < 5 ? 'green' : 'red', cursor: 'pointer' };

    return (
        <div>
            <button style={buttonStyle} onClick={onClickHandler}>
                {start}
            </button>
            <button onClick={onResClickHandler}>reset</button>
        </div>
    )
}
// import type { Meta, StoryObj } from '@storybook/react';
// import { Accordion } from './Accordion';
// import { dataAccordion } from '../../../data/AccordionData';
// Эти строки импортируют необходимые модули и компоненты:

// Meta и StoryObj - типы из Storybook, которые помогают нам описать метаданные и объект истории соответственно.

// Accordion - это компонент, для которого мы создаем историю.

// dataAccordion - пример данных, которые используются в компоненте Accordion.

// typescript
// const meta: Meta<typeof Accordion> = {
//     title: 'Example/Accordion',
//     component: Accordion,
// };
// Эта часть кода задает метаданные для истории компонента:

// meta - объект, содержащий метаданные для Storybook.

// title - Заголовок истории. Этот заголовок будет отображаться в боковой панели Storybook.

// component - Сам компонент, для которого создается история. В данном случае это Accordion.

// typescript
// export default meta;
// Эта строка экспортирует объект meta по умолчанию. Это необходимо для Storybook, чтобы он мог получить доступ к метаданным и отобразить историю правильно.

// typescript
// type Story = StoryObj<typeof Accordion>;
// Эта строка создает тип Story на основе типа компонента Accordion. Это позволяет нам задавать аргументы для истории и гарантировать, что они соответствуют пропсам компонента Accordion.

// typescript
// export const DefaultAccordion: Story = {
//     args: {
//         data: dataAccordion,
//     },
// };
// Эта часть кода определяет саму историю:

// DefaultAccordion - имя истории. Это имя будет использоваться в Storybook для идентификации истории.

// args - аргументы, которые будут переданы в компонент Accordion при рендере этой истории. В данном случае это:

// data - данные, которые передаются в компонент Accordion. Мы используем dataAccordion в качестве примера.
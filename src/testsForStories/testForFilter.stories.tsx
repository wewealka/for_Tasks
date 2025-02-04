import { useState } from "react";
import { action } from '@storybook/addon-actions'
import { FilterMethod} from "../tasks/taskForFilter/TaskforFilter";
import { dataMoney } from "../data/dataFilterMethod";


export default {
    title: "FilterStory",
}

export const FilterMethodDefault = () => <FilterMethod data={dataMoney} />

export const Rubls = () => {
    const [money] = useState(dataMoney);
    const List: Array<JSX.Element> = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS").map((item, index) => {
        return <li key={index}>
            <span className="filtermethod">{item.banknots}:</span>
            <span className="filtermethod">count: {item.value}</span>
            <span className="filtermethod">{item.number}</span>
        </li>;
    });
    return (
        <>
            <ul>
                {List}
            </ul>
            <div style={{ marginLeft: '55px' }}>
                <button onClick={action("All btn clicked")}>All</button>
                <button onClick={action("RUBLS btn clicked")}>RUBLS</button>
                <button onClick={action("Dollars btn clicked")}>Dollars</button>
            </div>
        </>
    );
}
export const Dollars = () => {
    const [money] = useState(dataMoney);
    const List: Array<JSX.Element> = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars").map((item, index) => {
        return <li key={index}>
            <span className="filtermethod">{item.banknots}:</span>
            <span className="filtermethod">count: {item.value}</span>
            <span className="filtermethod">{item.number}</span>
        </li>;
    });
    return (
        <>
            <ul>
                {List}
            </ul>
            <div style={{ marginLeft: '55px' }}>
                <button onClick={action("All btn clicked")}>All</button>
                <button onClick={action("RUBLS btn clicked")}>RUBLS</button>
                <button onClick={action("Dollars btn clicked")}>Dollars</button>
            </div>
        </>
    );
}



import { dataButtonForUseState } from "../../data/dataButton";
import { dataMoney } from "../../data/dataFilterMethod";
import { useState } from "react";

export type FiltersValuesType = "All" | "RUBLS" | "Dollars";

export function FilterMethod() {
    const [money] = useState(dataMoney);
    const [currentMoney, setCurrentMoney] = useState(money);

    const ButtonForUseState = (filter: FiltersValuesType) => {
        setCurrentMoney(dataButtonForUseState(money, filter));
    };

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span className="filtermethod">{objFromMoneyArr.banknots}:</span>
                            <span className="filtermethod">count: {objFromMoneyArr.value}</span>
                            <span className="filtermethod">{objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div style={{ marginLeft: '55px' }}>
                <button onClick={() => ButtonForUseState("All")}>All</button>
                <button onClick={() => ButtonForUseState("RUBLS")}>RUBLS</button>
                <button onClick={() => ButtonForUseState("Dollars")}>Dollars</button>
            </div>
        </>
    );
}





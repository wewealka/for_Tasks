import { FiltersValuesType } from "../tasks/taskForFilter/TaskforFilter"
import { dataMessagesType } from "./inputData"

//for useState
export const dataButtonfoo1 = (subscriber: string, age: number, adress: string) => {
    console.log(subscriber, age, adress)
}

export const dataButtonfoo2 = (subscriber: string) => {
    console.log(subscriber)
}

export const dataButtonfoo3 = () => {
    console.log('i am stupid button')
}
//for useState
//****************************************************************************************

export const dataButtonForUseState = (money: any[], filter: FiltersValuesType) => {
    if (filter === "Dollars") {
        return money.filter((filteredMoney) => filteredMoney.banknots === "Dollars");
    } else if (filter === "RUBLS") {
        return money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS");
    } else {
        return money;
    }
};

// for input

export const dataBtnForInputAdd = (messages: dataMessagesType[], message: string) => {
    const NewRow: dataMessagesType = {
        message: message
    };
    return [NewRow, ...messages]
}

import { useState } from "react";
import { TaskForTrainingUseState } from "../tasks/TaskForUseState/TaskUSeState";
import {action} from '@storybook/addon-actions'



export default {
    title: "UseStateStory",
}

export const BasicState = () => <TaskForTrainingUseState value={1}/>
export const secondStory = () => {
    let initional_A = 1
    let [a, setA] = useState(initional_A)
    const h3Style = {
        color: a < 5 ? "green" : "red"
    }
    const OnClickHandlerForTaskUSeState = () => {
        a < 5 ? setA(++a) : action("The limit has been reached")
    }
    const OnClickHandlerForTaskUSeState1 = () => {
        setA(0)
        action("start")
    }

    return (
        <div>
            <h3 style={h3Style}>{a}</h3>
            <button onClick={OnClickHandlerForTaskUSeState}>number</button>
            <button onClick={OnClickHandlerForTaskUSeState1}>0</button>
        </div>
    )
}
import { useState } from "react"

type TaskForTrainingUseStateType = {
    value: number
}

export function TaskForTrainingUseState(p: TaskForTrainingUseStateType) {
    let [a, setA] = useState(p.value)

    const OnClickHandlerForTaskUSeState = () => {
        setA(++a)
        console.log(a)
    }
    const OnClickHandlerForTaskUSeState1 = () => {
        setA(0)
        console.log(0)
    }

    return (
        <div>
            <h3>{a}</h3>
            <button onClick={OnClickHandlerForTaskUSeState}>number</button>
            <button onClick={OnClickHandlerForTaskUSeState1}>0</button>
        </div>
    )
}
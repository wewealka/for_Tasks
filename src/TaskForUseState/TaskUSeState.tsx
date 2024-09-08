import { useState } from "react"





export function TaskForTrainingUseState () {

    let initional_A = 1
    let [a, setA] = useState(initional_A) 

    
    const OnClickHandlerForTaskUSeState = () => {
        setA(++a)
        console.log (a)
    }
    const OnClickHandlerForTaskUSeState1 = () => {
        setA(0)
        console.log (0)
    }
    return(
        <div>
            <h3>{a}</h3>
            <button onClick={OnClickHandlerForTaskUSeState}>number</button>
            <button onClick={OnClickHandlerForTaskUSeState1}>0</button>
        </div>
    )
}
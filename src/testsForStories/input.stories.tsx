import { ChangeEvent, useRef, useState } from "react"

export default {
    title: "inputPart2 - a scenario to avoid"
}

export const InputUncontrlled = () => <input />

export const TrackValueOfUncontrlledInput = () => {
    const [value, setValue] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChangeHandler} /> - {value}</>
}

export const GetInputValueByBtnPress = () => {
    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef} /> <button onClick={save}>show</button>
        - actual value: {value}
    </>
}

export const InputContrlledWidFixedValue = () => <input value={"love ts"} />

import { useState } from "react";
import { FullInput } from "./Full/FullInput";
import { dataMessagesType } from "../../data/inputData";
import { dataBtnForInputAdd } from "../../data/dataButton";
import { MainInput } from "./Devided/MainInput";
import { MainButton } from "../../components/Button";

type TaskForInputType = {
    data: dataMessagesType[]
}

export const TaskForInput = (props:TaskForInputType) => {
    
    let [MainTitle, setMainTitle] = useState("");
    let [FullTitle, setFullTitle] = useState("");
    let [currentMessages1, setMessages1] = useState(props.data)
    let [currentMessages2, setMessages2] = useState(props.data)

    const AddMainTitle = () => {
        if (MainTitle.trim()) {
            const updatedTitle = dataBtnForInputAdd(currentMessages1, MainTitle);
            setMessages1(updatedTitle);
            setMainTitle("");
        }else {
            alert("Заполните поле!")
        }
    }

    const AddFullTitle = () => {
        if (FullTitle.trim()) {
            const updatedTitle = dataBtnForInputAdd(currentMessages2, FullTitle);
            setMessages2(updatedTitle);
            setFullTitle("");
        }else {
            alert("Заполните поле!")
        }
    }

    const MessageList1: Array<JSX.Element> = currentMessages1.map((object, index) => {
        return (
            <ul key={index}>
                {object.message}
            </ul>
        )
    })

    const MessageList2: Array<JSX.Element> = currentMessages2.map((object, index) => {
        return (
            <ul key={index}>
                {object.message}
            </ul>
        )
    })

    return (
        <div>
            <div className="input-button-container">
            <MainInput MainTitle={MainTitle} setMainTitle={setMainTitle} AddMainTitle={AddMainTitle}  />{/*for hotkey*/}
                <MainButton name={"+"} callBack={AddMainTitle} />
            </div>
            <div>
                {MessageList1}
            </div>
            <div>
                <FullInput FullTitle={FullTitle} setFullTitle={setFullTitle} AddFullTitle={AddFullTitle} />
                {MessageList2}
            </div>
        </div>
    );
};
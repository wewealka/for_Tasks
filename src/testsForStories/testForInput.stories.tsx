import { useState } from "react";
import { dataBtnForInputAdd } from "../data/dataButton";
import { FullInput } from "../tasks/taskForInput/Full/FullInput";
import { dataMessages, dataMessagesType } from "../data/inputData";
import { MainButton } from "../components/Button";
import { MainInput } from "../tasks/taskForInput/Devided/MainInput";




export default {
    title: "Input"
}

export const InputDefaultValue = () => <input defaultValue={"yo"} />

export const InputWidBtn = () => {
    let [Title, setTitle] = useState("");
    let [currentMessages, setMessages2] = useState<dataMessagesType[]>([])
    const AddTitle = () => {
        if (Title.trim()) {
            const updatedTitle = dataBtnForInputAdd(currentMessages, Title);
            setMessages2(updatedTitle);
            setTitle("");
        } else {
            alert("Заполните поле!")
        }
    }
    const MessageList: Array<JSX.Element> = currentMessages.map((object, index) => {
        return (
            <ul key={index}>
                {object.message}
            </ul>
        )
    })
    return (
        <div>
            <div>
                <FullInput FullTitle={Title} setFullTitle={setTitle} AddFullTitle={AddTitle} />
                {MessageList}
            </div>
        </div>
    );
}

export const InputWidOutBtn = () => {
    let [Title, setTitle] = useState("");
    let [currentMessages, setMessages2] = useState<dataMessagesType[]>([])
    const AddTitle = () => {
        if (Title.trim()) {
            const updatedTitle = dataBtnForInputAdd(currentMessages, Title);
            setMessages2(updatedTitle);
            setTitle("");
        } else {
            alert("Заполните поле!")
        }
    }
    const MessageList: Array<JSX.Element> = currentMessages.map((object, index) => {
        return (
            <ul key={index}>
                {object.message}
            </ul>
        )
    })
    return (
        <div>
            <div className="input-button-container">
            <MainInput MainTitle={Title} setMainTitle={setTitle} AddMainTitle={AddTitle}  />{/*for hotkey*/}
                <MainButton name={"+"} callBack={AddTitle} />
            </div>
            <div>
                {MessageList}
            </div>
        </div>
    );
}
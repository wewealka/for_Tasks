import React, { useState } from "react";
import {action} from '@storybook/addon-actions'
import { ControlledSwitcher } from "../tasks/TaskForUseState/Onoff/controlled/RenderForControlledSwitcher";
import styled from "styled-components";
import { MainButton } from "../components/Button";



export default {
    title: 'OnOFF Storis',
    component: ControlledSwitcher
}

const callbackOn = action('on clicked')
const callbackOff = action('off clicked')

export const mainRenderControlledSwitcher = () => <ControlledSwitcher/>
export const OFF = () => {
    let [state, setState] = useState<boolean>(false)
    return (
        <div>
            <p>ControlledSwitcher</p>
            <OnOffCntrld state={state} setState={setState}/>
        </div>
    )
}
export const ON = () => {
    let [state, setState] = useState<boolean>(true)
    return (
        <div>
            <p>ControlledSwitcher</p>
            <OnOffCntrld state={state} setState={setState}/>
        </div>
    )
}

    type OnOffCntrldT = {
        state: boolean 
        setState:React.Dispatch<React.SetStateAction<boolean>>
    }
    
const OnOffCntrld:React.FC<OnOffCntrldT> = ({ state, setState}) => {
        const OnStyle = {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            padding: "2px",
            backgroundColor: state ?  "#31aa31" : "" 
        };
        const OffStyle = {
            width: "30px",
            height: "20px",
            border: "1px solid black",
            display: "inline-block",
            marginLeft: "2px",
            padding: "2px",
            backgroundColor: !state ? "red" : "",
        };
        const IndicatorStyle = {
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            outline: "1px solid black",
            display: "inline-block",
            marginLeft: "5px",
            padding: "2px",
            backgroundColor: state ? "#31aa31" : "red",
        };
        return (
            <div>
                
                <MainButton style={OnStyle} name={"On"} callBack={callbackOn}/>
                <MainButton style={OffStyle} name={"Off"} callBack={callbackOff}/>
                <div style={IndicatorStyle}></div>
            </div>
        )
    }
    
    const St = styled.div`
        background-color: #31aa31;
        justify-content: center;
    `
    




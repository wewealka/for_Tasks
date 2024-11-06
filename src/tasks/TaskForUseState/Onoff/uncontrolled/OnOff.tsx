import { MainButton } from "../../../../components/Button";
import { useState } from "react";


function OnOff () {
    const switchStatus = null 
    let [state, setState] = useState<boolean | null >(switchStatus)

    const OnSwitchHandler = () => {
        setState(true)
    }
    const OffSwitchHandler = () => {
        setState(false)
    }

    const OnStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: state === null ? "" : state ?  "#31aa31" : "" 
    };
    const OffStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: state === null ? "" : !state ? "red" : "",
    };
    const IndicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        outline: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: state === null ? "" : state ? "#31aa31" : "red",
    };
    return (
        <div>
            <p>UnControlledSwitcher</p>
            <MainButton style={OnStyle} name={"On"} callBack={OnSwitchHandler}/>
            <MainButton style={OffStyle} name={"Off"} callBack={OffSwitchHandler}/>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

export default OnOff

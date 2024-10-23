import styled from "styled-components";
import { MainButton } from "../../../../../components/Button";


type OnOffCntrldT = {
    switchStatus: null
    state: boolean | null
    setState: React.Dispatch<React.SetStateAction<boolean | null>>
}



export const OnOffCntrld:React.FC<OnOffCntrldT> = ({switchStatus, state, setState}) => {
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
            
            <MainButton style={OnStyle} name={"On"} callBack={OnSwitchHandler}/>
            <MainButton style={OffStyle} name={"Off"} callBack={OffSwitchHandler}/>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

const St = styled.div`
    background-color: #31aa31;
    justify-content: center;
`

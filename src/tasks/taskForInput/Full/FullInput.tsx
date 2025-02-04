import { ChangeEvent, KeyboardEvent} from "react";
import { MainButton } from "../../../components/Button";

{/* interface */} type FullInputProps = {
    FullTitle?: string;
    setFullTitle?: (title: string) => void;
    AddFullTitle?: () => void;
}
const defaultAddTitle = () => {};//Fallback 

export const FullInput: React.FC<FullInputProps> = ({FullTitle,setFullTitle,AddFullTitle}) => {

    
    const OnChangeInputHadler = (event: ChangeEvent<HTMLInputElement>) => {
        setFullTitle?.(event.currentTarget.value)
    }
    const OnKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            AddFullTitle?.()
        }
    }

    return (
        <div>
            <input
            value={FullTitle}
            onChange={OnChangeInputHadler}
            onKeyDown={OnKeyPressHandler}/>
            <MainButton name={"+"} callBack={AddFullTitle || defaultAddTitle} />
        </div>
    );
}; 
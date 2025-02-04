import { ChangeEvent, KeyboardEvent } from "react";

{/* interface */} type MainInputProps = {
    MainTitle?: string;
    setMainTitle?: (title: string) => void;
    AddMainTitle?: () => void;
}


export const MainInput: React.FC<MainInputProps> = ({MainTitle,setMainTitle,AddMainTitle}) => {

    
    const OnChangeInputHadler = (event: ChangeEvent<HTMLInputElement>) => {
        setMainTitle?.(event.currentTarget.value)
    }
    const OnKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            AddMainTitle?.()
        }
    }

    return (
        <div>
            <input
            value={MainTitle}
            onChange={OnChangeInputHadler}
            onKeyDown={OnKeyPressHandler}/>
        </div>
    );
}; 
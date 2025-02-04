import {useState} from "react";
import {dataSelectEx, dataSelectExType, dataSelectIn} from "./data/selectData";
import {CustomSelect} from "./customselect/CustomSeletc";
import {Button} from "@mui/material";

export const RenderCustomSelect = () => {
    const [toggle, setToggle] = useState<Record<string, boolean>>({});
    const [values] = useState<dataSelectExType[]>(dataSelectEx)
    const [items] = useState(dataSelectIn)
    const [openFactor, setOpenFactor] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<dataSelectExType []| null>(null);

    const toggleSWitcher = (selectId: string) => {
        setToggle((eachValue) => ({
            ...eachValue,
            [selectId]: !eachValue[selectId]
        }));
    }
    const currentUserHandler = (userID:string) => {
        setCurrentUser(values.filter((value)=> value.selectId === userID));
    }

    const factorHandler = () => setOpenFactor(!openFactor);

    const renderCustomSelects =
        values.map((value: dataSelectExType) => {
            const itemsForEachSelect = items[value.selectId] || [];
            const toggleFactor = toggle[value.selectId] || false;
            return (
                <CustomSelect
                    key={value.selectId}
                    id={value.selectId}
                    value={value.title}
                    items={itemsForEachSelect.map((item) => item.content)}
                    toggleController={toggleFactor}
                    toggleSWitcher={toggleSWitcher}
                    currentUserHandler={currentUserHandler}
                />
            );
        });

    return (
        <div>
            <div>
                <h3 style={{display: "flex"}}>
                    current user: {currentUser?.map(user => user.title).join(", ")}
                    <Button variant={"contained"} onClick={factorHandler}>↓</Button>
                </h3>

            </div>
            {openFactor ? <div>{renderCustomSelects}</div> : ""}
        </div>
    )
}
//mine select
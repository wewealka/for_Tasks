import {dataSelectExType} from "../data/selectData";

type CustomSelectType = {
    id: string;
    value: string;
    items: Array<string>;
    toggleController: boolean;
    toggleSWitcher: (selectId: string) => void;
    currentUserHandler:(selectId: string) => void;
};

type SelectTitle = {
    id: string;
    value: string;
    toggleSWitcher: (selectId: string) => void;
    currentUserHandler:(selectId: string) => void;
};

type SelectBody = {
    items: Array<string>;
    toggleController: boolean;
};

export const CustomSelect = (p: CustomSelectType) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', outline: "2px solid black"}}>
            <SelectTitle
                id={p.id}
                value={p.value}
                toggleSWitcher={p.toggleSWitcher}
                currentUserHandler={p.currentUserHandler}

            />
            <SelectBody
                items={p.items}
                toggleController={p.toggleController}
            />
        </div>
    );
};

const SelectTitle = (p: SelectTitle) => {
    return <h3 style={{minWidth: "80px"}}
               onMouseEnter={() => p.toggleSWitcher(p.id)}
               onMouseLeave={() => p.toggleSWitcher(p.id)}
               onClick={() => p.currentUserHandler(p.id)}
    >
        {p.value}
    </h3>;
};

const SelectBody = (p: SelectBody) => {
    return (
        <div>
            {p.toggleController ? (
                <ul>
                    {p.items.map((item: string, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};





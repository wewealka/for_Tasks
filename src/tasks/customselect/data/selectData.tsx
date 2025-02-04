import { v1 } from "uuid";

export type dataSelectExType = {
    selectId: string;
    title: string;
};


export const idCreator = () => v1()

const key0 = idCreator();
const key1 = idCreator();
const key2 = idCreator();
const key3 = idCreator();
const key4 = idCreator();

export const dataSelectEx: Array<dataSelectExType> = [
    { selectId: key0, title: "User: 0" },
    { selectId: key1, title: "User: 1" },
    { selectId: key2, title: "User: 2" },
    { selectId: key3, title: "User: 3" },
    { selectId: key4, title: "User: 4" },
];

export const dataSelectIn = {
    [key0]: [{ content: "User: 0" },{ content: "login: it" },{ content: "password: 000" }],
    [key1]: [{ content: "User: 1" }],
    [key2]: [{ content: "User: 2" }],
    [key3]: [{ content: "User: 3" }],
    [key4]: [{ content: "User: 4" }],
};

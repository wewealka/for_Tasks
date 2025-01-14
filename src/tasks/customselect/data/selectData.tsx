import { v1 } from "uuid";

export type dataSelectExType = {
    selectId: string;
    title: string;
};

export type dataSelectInT\
ype = {
    content: string;
};

export const idCreater = () => {
    return v1();
};

const key0 = idCreater();
const key1 = idCreater();
const key2 = idCreater();
const key3 = idCreater();
const key4 = idCreater();

export const dataSelectEx: Array<dataSelectExType> = [
    { selectId: key0, title: "User: 0" },
    { selectId: key1, title: "User: 1" },
    { selectId: key2, title: "User: 2" },
    { selectId: key3, title: "User: 3" },
    { selectId: key4, title: "User: 4" },
];

export const dataSelectIn = {
    [key0]: [{ content: "User: 0" }],
    [key1]: [{ content: "User: 1" }],
    [key2]: [{ content: "User: 2" }],
    [key3]: [{ content: "User: 3" }],
    [key4]: [{ content: "User: 4" }],
};
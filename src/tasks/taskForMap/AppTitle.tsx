import { dataAppTitle } from "../../data/dataAppTitle";

export type AppTitleComponentPropsType = {
    titles: Array<AppTitlePropsType>;
}

export type AppTitlePropsType = {
    id: number,
    title: string,
};


export function AppTitle(props: AppTitleComponentPropsType) {
    return (
        <>
            {dataAppTitle.map((dataAppTitle: AppTitlePropsType) => (
                <h2 key={dataAppTitle.id}>{dataAppTitle.title}</h2>
            ))}
        </>
    )
}
export type CustomSelectType = {
    id: string
    title: string
    items:SelectBodyType
}
export const CustomSelect = (p:CustomSelectType) => {
    return (
        <div>
            <SelectTitle/>
            <SelectBody/>
        </div>
    )
}

const SelectTitle = () => {
    return (
        <h3></h3>
    )
}
export type SelectBodyType = {
    [key:string]:[string]
}
const SelectBody = () => {
    return  <div></div>
}
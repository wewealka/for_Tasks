import { useState } from "react"
import { CustomSelect } from "./customselect/CustomSeletc"
import { dataSelectEx, dataSelectExType, dataSelectIn } from "./data/selectData"

export const CustomSelecet = () => {
    const [selectedValue, setSelectedValue] = useState<Array<dataSelectExType>>(dataSelectEx)
    const [itemsValue, setItemsValue] = useState(dataSelectIn)
    return (
        <div>
            {dataSelectEx.map((selectItme:dataSelectExType)=>{
                let items = itemsValue[selectItme.selectId] 
                return (
                    <CustomSelect
                    id={selectItme.selectId}
                    title={selectItme.title}
                    items ={items}/>
                )
            })}
        </div>
    )
}
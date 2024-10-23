import { useState } from "react"
import { OnOffCntrld } from "./Onoffcontl/OnOffCr"


export const ControlledSwitcher  = () => {
    const switchStatus = null 
    let [state, setState] = useState<boolean | null >(switchStatus)

    return (
        <div>
            <OnOffCntrld switchStatus={switchStatus} state={state} setState={setState}/>
        </div>
    )
}
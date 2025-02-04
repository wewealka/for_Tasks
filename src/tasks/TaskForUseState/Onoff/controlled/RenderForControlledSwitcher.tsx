import { useState } from "react"
import { OnOffCntrld } from "./Onoffcontl/OnOffCr"


export const ControlledSwitcher  = () => {
    const switchStatus = null 
    let [state, setState] = useState<boolean | null >(switchStatus)

    return (
        <div>
            <p>ControlledSwitcher</p>
            <OnOffCntrld switchStatus={switchStatus} state={state} setState={setState}/>
        </div>
    )
}
import { dataAppTitle } from "../../data/dataAppTitle"
import { dataButtonfoo1, dataButtonfoo2, dataButtonfoo3 } from "../../data/dataButton"
import { Task1, topCars } from "../../tasks/taskForMap/Task1"
import { FilterMethod } from "../../tasks/taskForFilter/TaskforFilter"
import { TaskForInput } from "../../tasks/taskForInput/TaskForInput"
import { Accordion } from "../../tasks/taskForMap/accordion/Accordion"
import { AppTitle } from "../../tasks/taskForMap/AppTitle"
import { TaskForTrainingUseState } from "../../tasks/TaskForUseState/TaskUSeState"
import { MainButton } from "../Button"
import { Delimeter } from "../stupidComponents/Delimeter"
import { Rating } from "../../tasks/taskForConditional-Rendering/Raiting"
import OnOff from "../../tasks/TaskForUseState/Onoff/uncontrolled/OnOff"
import { ControlledSwitcher } from "../../tasks/TaskForUseState/Onoff/controlled/RenderForControlledSwitcher"
import { dataMessages } from "../../data/inputData"
import { dataAccordion } from "../../data/AccordionData"
import { dataMoney } from "../../data/dataFilterMethod"
import { AccordionM } from "../../tasks/taskForMap/accordionmain/AccordionM"
import { dataAccordionM } from "../../tasks/taskForMap/accordionmain/AccordionDataM"
import { RenderCustomSelect } from "../../tasks/customselect/RenderCustomSelect"

export const MainBasket = () => {
    return (
        <div className="MainBasket">
            <RenderCustomSelect/>
            <Delimeter/>{/*//////////////////////////////////////////////////////////////////////////////////////*/}
            <AccordionM data={dataAccordionM} fill={true}/>
            <Delimeter/>{/*//////////////////////////////////////////////////////////////////////////////////////*/}
            <ControlledSwitcher />
            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <OnOff />

            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <TaskForInput data={dataMessages} />

            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <Rating value={0} />

            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <Accordion data={dataAccordion} />

            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <FilterMethod data={dataMoney} />

            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <TaskForTrainingUseState value={1} />

            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <MainButton name={"MyYouTubeChanel-1"} callBack={() => dataButtonfoo1('viva', 21, 'Minsk')} />
            <MainButton name={"MyYouTubeChanel-2"} callBack={() => dataButtonfoo2('vova')} />
            <MainButton name={"3foo"} callBack={dataButtonfoo3} />

            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <AppTitle titles={dataAppTitle} />

            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <Task1 cars={topCars} />
        </div>
    )
}


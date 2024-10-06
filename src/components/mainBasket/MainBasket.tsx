import { dataAppTitle } from "../../data/dataAppTitle"
import { dataButtonfoo1, dataButtonfoo2, dataButtonfoo3 } from "../../data/dataButton"
import { Task1, topCars } from "../../Task1"
import { FilterMethod } from "../../tasks/taskForFilter/TaskforFilter"
import { Accordion } from "../../tasks/taskForMap/accordion/Accordion"
import { AppTitle } from "../../tasks/taskForMap/AppTitle"
import { TaskForTrainingUseState } from "../../tasks/TaskForUseState/TaskUSeState"
import { Task2Button } from "../Button"
import { OnOff } from "../OnOff/OnOff"
import { Delimeter } from "../stupidComponents/Delimeter"
import { Rating } from "../stupidComponents/Raiting"

export const MainBasket = () => {
    return (
        <div className="MainBasket">
            <OnOff/>
            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <FilterMethod />
            <Delimeter /> {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <TaskForTrainingUseState />
            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <Task2Button name={"MyYouTubeChanel-1"} callBack={() => dataButtonfoo1('viva', 21, 'Minsk')} />
            <Task2Button name={"MyYouTubeChanel-2"} callBack={() => dataButtonfoo2('vova')} />
            <Task2Button name={"3foo"} callBack={dataButtonfoo3} />
            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <AppTitle titles={dataAppTitle} />
            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <Accordion />
            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Delimeter />{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <Task1 cars={topCars} />
        </div>
    )
}


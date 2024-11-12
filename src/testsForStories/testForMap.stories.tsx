import { dataAppTitle } from "../data/dataAppTitle";
import { AppTitle } from "../tasks/taskForMap/AppTitle";
import { Task1, topCars } from "../tasks/taskForMap/Task1";


export default {
    title:"MapStory",
}

export const AppTitleStory = () => <AppTitle titles={dataAppTitle}/>
export const Task1Story = () => <Task1 cars={topCars}/>
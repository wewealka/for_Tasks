// import './App.css';
// import { Accordion, dataAccordion } from './components/Accordion';
// import { AppTitle, dataAppTitle } from './components/AppTitle';
// import {Task2Button } from './components/Button';
// import { dataButtonfoo1, dataButtonfoo2, dataButtonfoo3 } from './data/dataButton';
// import { Rating } from './components/Raiting';
// import { Task1, topCars } from './Task1';
// import { TaskForTrainingUseState } from "./TaskForUseState/TaskUSeState";
import { FilterMethod } from "./components/TaskforFilter";







// function hello() {
//   alert("Hello")
// }
// hello();

function App() {
  return (
    <div >
      <FilterMethod/>
      {/* <TaskForTrainingUseState/> */
      /* <Task2Button name={"MyYouTubeChanel-1"} callBack={()=>dataButtonfoo1('viva', 21, 'Minsk')}/>
      <Task2Button name={"MyYouTubeChanel-2"} callBack={()=>dataButtonfoo2('vova')}/>
      <Task2Button name= {"3foo"} callBack={dataButtonfoo3}/> */
      /* <AppTitle titles={dataAppTitle}/>
      <Accordion {...dataAccordion}/>
      <Rating/>
      <Task1 cars={topCars}/> */}
    </div>
  );
}



export default App;


/* second way *********************************************************************************/
/* <Accordion title={dataAccordion.title} AccordionBody={dataAccordion.AccordionBody} /> */
/* second way ******************************************************************************** */
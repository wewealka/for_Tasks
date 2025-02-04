// import React, {MouseEvent} from 'react'

type ButtonType = {
    name:string,
    callBack: () => void
    style?:React.CSSProperties
    disabled?: boolean
}

export function MainButton (props:ButtonType) {
    
    
const OnClickHandler = () => {
    props.callBack()
} 

    return (
        <button style = {props.style} onClick={OnClickHandler}>{props.name}</button>
    )
}














// type Task2ButtonPropsType = {
//     data:Array<dataTask2ButtonPropsType >
// }
// type dataTask2ButtonPropsType ={
//     name:string,
//     id:number
// }

// export const dataTask2Button = [
//     {id:1, name:'MyYouTubeChanel-1'}, 
//     {id:2, name:'MyYouTubeChanel-2'}
// ]

// const Clicker = ()=> {
//     let x = 0;
//     console.log(x+1)
// }

// export function Task2Button (props:Task2ButtonPropsType) {
// const ButtonLIst: Array<JSX.Element> = props.data.map ((data:dataTask2ButtonPropsType)=>{
//     return (
//         <button key={data.id}>
//             {data.name}
//         </button>
//     )
// })
//     return (
//         <div onClick={Clicker}>{ButtonLIst}</div>
//     )
// }








    // const MyFirstSubcriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("hello iam vova")
    // }
    // const MyFirstSubcriber2 = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("hello iam ivan")
    // }

    // const OnClickHandler = (name:string) => {
    //     console.log(name)
    // }

/* <button onClick={(event:MouseEvent<HTMLButtonElement>)=>{console.log("hello")}}>MyYouTubeChanel-1</button> 
<button onClick = {(event:MouseEvent<HTMLButtonElement>)=> OnClickHandler('vova')}>MyYouTubeChanel-1</button>
<button onClick = {(event:MouseEvent<HTMLButtonElement>)=> OnClickHandler('ivan')}>MyYouTubeChanel-2</button>  */



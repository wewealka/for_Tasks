import { useState } from "react"

export const OnOff = () => {
    const [isOn, setIsOn] = useState(false)
    const handleOnClick = () => {
        setIsOn(true)
    }
    const handleOffClick = () => {
        setIsOn(false)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
                onClick={handleOnClick}
                style={{
                    backgroundColor: isOn ? 'green' : 'lightgray', // Цвет кнопки "On"
                    color: isOn ? 'white' : 'black',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '10px',
                    boxShadow: isOn ? 'inset 0 0 5px rgba(0,0,0,0.5)' : 'none', // Вдавленный эффект
                }}
            >on</button>
            <button
                onClick={handleOffClick}
                style={{
                    backgroundColor: !isOn ? 'red' : 'lightgray', // Цвет кнопки "Off"
                    color: !isOn ? 'white' : 'black',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    boxShadow: !isOn ? 'inset 0 0 5px rgba(0,0,0,0.5)' : 'none', // Вдавленный эффект
                }}
            >off</button>
            <div
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: isOn ? 'green' : 'red', // Индикатор состояния
                    marginLeft: '10px',
                }}
            />
        </div>
    )
}






// class MyComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.addActiveClass= this.addActiveClass.bind(this);
//         this.state = {
//             active: false,
//         };
//     }
//     toggleClass() {
//         const currentState = this.state.active;
//         this.setState({ active: !currentState });
//     };
//     render() {
//         return (
//             <div
//                 className={this.state.active ? 'your_className': null}
//                 onClick={this.toggleClass}
//             >
//                 <p>{this.props.text}</p>
//             </div>
//         )
//   }
// }
// class Test extends Component {
//     render() {
//         return (
//             <div>
//                 <MyComponent text={'1'} />
//                 <MyComponent text={'2'} />
//             </div>
//         );
//     }
// }
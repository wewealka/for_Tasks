import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();



// let users = [
//   {
//     userName: "Dima",
//     age: 10,
//     adres: {
//       country: "Belarus",
//       city: "Minsk"
//     }
//   },

//   {
//     userName: "Victor",
//     age: 30,
//     adres: {
//       country: "Belarus",
//       city: "Minsk"
//     }
//   }
// ]

// console.log(users[0].userName)
// console.log(users.age, users.userName, users.adres.country, users.adres.city)
// console.log(users.age, users.userName, users.adres.country, users.adres.city)
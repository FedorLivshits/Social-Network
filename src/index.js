import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postMessages = [
    {id: 1, message:'В процессе разработки'},
    {id: 2, message:'Свободу Алексею Навальному!'},
    {id: 3, message:'Использую метод массива map'},
];

let dialogsData = [
    {name:'Alexander Sarygin', id: '1'},
    {name:'Sergey Solod', id: '2'},
    {name:'Vlad Sosaysky', id: '3'},
    {name:'Artem Kirpu', id: '4'},
    {name:'Sam kopylov', id: '5'},
    {name:'Pavel Ostapchuk', id: '6'},
];



ReactDOM.render(
  <React.StrictMode>
    <App postMessages={postMessages} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

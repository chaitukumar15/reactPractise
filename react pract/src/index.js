import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import TodoApp from './todoapp';
// import WeatherApp from './weather';
import Calculator from './calculator/calculator';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 {/* <TodoApp/> */}
 {/* <WeatherApp/> */}
 <Calculator />
 </>
);

reportWebVitals();

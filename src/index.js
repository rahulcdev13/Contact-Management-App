// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle'
// import 'font-awesome/css/font-awesome.css';
// import { BrowserRouter } from "react-router-dom"; 
// ReactDOM.render(
//     <>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </>, document.getElementById('root'));



import React from "react";
import ReactDOM from "react-dom/client"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"; 

// import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.css';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
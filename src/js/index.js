//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Contador from "./component/contador.jsx";

//render your react application

let number = 0;
// let second2 = 0; 
// let second3 = 0;


let numeroIntervalo = setInterval(function() {
    number++;

    ReactDOM.createRoot(document.getElementById('app')).render(<Contador number={number}/>)}, 100);

    



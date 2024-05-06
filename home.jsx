import React from "react"; // Main React.js library

import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

import { Navbar } from "./navbar"; 
import { Card } from "./card";

// WHAT: This variable contains the html to render
let home = (
    <div>
        <Navbar/>
        <div className="container-fluid">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    
    </div>
)

// WHERE: A DOM element that will contain the entire react generated html
const app = document.querySelector(app)

//what  //where
ReactDOM.render(home, app)
import React from "react";
// import { Link } from "react-router-dom";

import '../App.css';


export default function Routing(){
   
    return(
        
        <div>
            <h1>This is HomePage</h1>
            <a href='/Page1'><button className="button" > Page1</button></a>
            <a href='/Page2'><button className="button" > Page2</button></a>
            <a href='/Page3'><button className="button" > Page3</button></a>          
        </div>
    )
}


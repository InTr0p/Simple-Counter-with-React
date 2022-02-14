//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter (props){
    return <div className="Counter">
        <div className="calendar"></div>
        <div className="one"></div>
        <div className="two"></div>
        <div className="tree"></div>
        <div className="four"></div>
    </div>
}


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

function SimpleCounter(props) {
    return (
        <div className="Counter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="tree">{props.digittree}</div>
            <div className="two">{props.digittwo}</div>
            <div className="one">{props.digitone}</div>
        </div>
    );
}
SimpleCounter.prototype = {
    digitFour: propTypes.number,
    digitthree: propTypes.number,
    digittwo: propTypes.number,
    digitone: propTypes.number,
};

let Counter = 0;
setInterval(function () {
    const four = math.floor(Counter / 1000);
    const three = math.floor(Counter / 100);
    const two = math.floor(Counter / 10);
    const one = math.floor(Counter / 1);
    console.log(four, three, two, one)
    //render your react application
    Counter++;
    ReactDOM.render(<SimpleCounter digitone={one} digitone={two} digitone={three} digitone={four} />, document.querySelector("#app")
    );
}, 1000);
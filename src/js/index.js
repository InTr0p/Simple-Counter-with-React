//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="tree">{props.digitThree % 10}</div>
			<div className="Two">{props.digitTwo % 10}</div>
			<div className="One">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.prototype = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

let Counter = 0;
setInterval(function () {
	const Four = Math.floor(Counter / 1000);
	const Three = Math.floor(Counter / 100);
	const Two = Math.floor(Counter / 10);
	const One = Math.floor(Counter / 1);
	console.log(Four, Three, Two, One);

	Counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={One}
			digitOne={Two}
			digitOne={Three}
			digitOne={Four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

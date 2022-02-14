//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

function SimpleCounter(props) {
	return (
		<div className="Counter">
			<div className="calendar">
				<i className="far fa-clock"></i>{" "}
			</div>
			<div className="four">{props.digitFour}</div>
			<div className="tree">{props.digittree}</div>
			<div className="two">{props.digittwo}</div>
			<div className="one">{props.digitone}</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

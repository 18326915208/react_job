import React from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";
import routers from "./routers/routers";

var styleSheets={
	width:"100%",
	height:"100%",
	
}

ReactDOM.render((
	<div style={styleSheets}>
		{routers(browserHistory)}
	</div>
),document.getElementById("app"))

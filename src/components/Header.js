import React from "react";
var styleSheets={
	width:"100%",
	height:"1rem",
	background:"#f49346",
	color:"#fff",
	fontSize:"0.55rem",
	lineHeight:"1rem",
}
var styleTitle={
	marginLeft:"1rem"
}
class Header extends React.Component{
	render(){
		return(
			<div style={styleSheets}>
				<div>
					Logo
					<span style={styleTitle}>Dora哆啦</span>
				</div>
			</div>
		)
	}
}
export default Header;
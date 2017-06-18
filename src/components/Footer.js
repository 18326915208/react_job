import React from "react";
import FooterChild from "./FooterChild";
import Header from "./Header";
var styleSheets={
	div:{
		width:"100%",
		height:"100%",
		display:"flex",
		flexDirection:"column"
	},
	router:{
		flex:1,
		overflow:"hidden"
	}
}
class Footer extends React.Component{
	render(){
		return(
			<div style={styleSheets.div}>
				<Header />
				<div style={styleSheets.router}>
					{this.props.children}
				</div>
				<FooterChild />
			</div>
		)
	}
}
export default Footer;
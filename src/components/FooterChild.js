import React from "react";
import {Link} from "react-router";
var styleSheets={
	display:"flex",
	width:"100%",
	height:"1rem",
	background:"#f0f0f0",
	color:"#929292",
	alignItems:"center",
	justifyContent:"space-between"
	
}
class FooterChild extends React.Component{
	render(){
		return(
			<div style={styleSheets}>
				<Link className="link" to="/index">首页</Link>
				<Link className="link" to="/list">类目</Link>
				<Link className="link" to="/search">搜索</Link>
				<Link className="link" to="/shoppingcar">购物车</Link>
				<Link className="link" to="/people">个人</Link>
				
			</div>
		)
	}
}
export default FooterChild;
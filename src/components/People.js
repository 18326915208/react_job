import React from "react";
import {Link} from "react-router";
import Login from "./login";
class People extends React.Component{
	constructor(props){
		super(props);
		this.state={name:"未登录"}
	}
	componentWillMount(){
		this.setState({
			name :localStorage.getItem("userID")
		})
	}
	render(){
		return(
			<div>
				<p>登录名:{this.state.name}</p>
				<Link to="/login">登录</Link>
				<Link to="/register">注册</Link>
			</div>
		)
	}
}
export default People;
import React from "react";
class Login extends React.Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this)
		this.state={
			userID:""
		}
	}
	handleClick(props){
		var This=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"login",
				userID:This.refs.username.value,
				password:This.refs.pwd.value
			},
			success:function(res){
				if(res==0){
					alert("用户名不存在")
				}else if(res==2){
					alert("用户名密码不符")
				}else{
//					console.log(JSON.parse(res).userID)
//					localStorage.setItem( {userID:JSON.parse(res).userID} )
					This.setState({
						userID:JSON.parse(res).userID
					})
					setTimeout(function(){
						localStorage.userID=This.state.userID;
						This.props.history.goBack();
					},500)
				}
			}
		});
	}
	render(){
		return(
			<div>
				<label>
					用户名:
				</label>
				<input type="text" ref="username"/><br/>
				<label>
					密　码:
				</label>
				<input type="password" ref="pwd"/>
				<button onClick={this.handleClick}>提交</button>
			</div>
		)
	}
}
export default Login;
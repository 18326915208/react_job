import React from "react";
class Register extends React.Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(props){
		var This=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"register",
				userID:This.refs.username.value,
				password:This.refs.pwd.value
			},
			success:function(res){
				console.log(res);
				if(res==0){
					alert("用户名重名")
				}else if(res==1){
					alert("注册成功");
//					location.href="http://localhost:8080/People"
//					console.log(This.props)
					This.props.history.goBack();
				}else if(res==2){
					alert("数据库报错")
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
export default Register;
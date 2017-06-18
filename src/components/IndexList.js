import React from "react";
import {Link} from "react-router";
var styleSheets={
	display:"flex",
	width:"100%",
	color:"#666"
}
var styleImg={
	flex:1,
	height:"2rem",
	width:"2.5rem",
}
class IndexList extends React.Component{
	handleClick(){
//		alert(1)
		if(localStorage.getItem("userID")){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{
					userID:localStorage.getItem("userID"),
					goodsID:this.props.data.goodsID
				},
				success:function(res){
					console.log(res)
				}
			});
		}
	}
	render(){
		return(
			<div>
				<div style={styleSheets}>
					<img style={styleImg} src={this.props.data.goodsListImg}/>
					<Link to={`/detial/${this.props.data.goodsID}`}>{this.props.data.goodsName}</Link>
				</div>
				<button onTouchEnd={this.handleClick.bind(this)}>加入购物车</button>
			</div>
		)
	}
	componentDidMount(){
		setTimeout(function(){
			myScroll.refresh();
		},1000)
	}
}
export default IndexList;
import React from "react";
import {Link} from "react-router";
class Detial extends React.Component{
	constructor(props){
		super(props);
		this.state={result:[]}
	}
	componentWillMount(){
		var This=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			data : {
				goodsID:This.props.params.id
			},
			dataType:"jsonp",
			success:function(res){
				console.log(res)
				This.setState({
					result:res
				})
			}
		});
	}
	render(){
		console.log(this.props.params.id)
		return(
			<div>
				<Link to="/">返回</Link>
			</div>
		)
	}
}
export default Detial;
import React from "react";

class ShoppingCar extends React.Component{
	componentWillMount(){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getCar.php",
			data:{
				userID:localStorage.getItem("userID")
			},
			dataType:"jsonp",
			success:function(res){
				console.log(res)
			}
		});
	}
	render(){
		return(
			<div>
				this is my ShoppingCar
			</div>
		)
	}
}
export default ShoppingCar;
import React from "react";
//import IndexBanner from "./IndexBanner";
import IndexList from "./IndexList";
class Index extends React.Component{
	constructor(props){
		super(props);
		this.state={result:[]}
	}
	componentWillMount(){
		var This=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
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
		var result=this.state.result;
		if(result){
			var arr=[];
			for(var i=0;i<result.length;i++){
				arr.push(<IndexList data={result[i]} key={i}/>)
			}
		}
		return(
			<div id="wrapper">
				<div>
					{arr}
				</div>
			</div>
		)
	}
	componentDidMount(){
		myScroll=new IScroll("#wrapper");
	}
}
export default Index;
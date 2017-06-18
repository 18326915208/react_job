import React from "react";
import {Router,Route,IndexRoute} from "react-router";
import Footer from "../components/Footer";

import Index from "../components/Index";
import List from "../components/List";
import Search from "../components/Search";
import ShoppingCar from "../components/ShoppingCar";
import People from "../components/People";
import Detial from "../components/Detial";
import Login from "../components/login";
import Register from "../components/Register";
const routers = browserHistory => (
	<Router history={browserHistory}>
		<Route path="/" component={Footer}>
			<IndexRoute  component={Index} />
			<Router path="index" component={Index} />
			<Router path="list" component={List} />
			<Router path="search" component={Search} />
			<Router path="shoppingcar" component={ShoppingCar} />
			<Router path="people" component={People} />
		</Route>
		<Route path="/detial/:id" component={Detial} />
		<Route path="login" component={Login} />
		<Route path="register" component={Register} />
	</Router>
)
export default routers;

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
// import Login from "./Components/Login"
import ProductHomePage from "./Components/ProductHomePage";
import AddProdcutForm from "./Components/AddProductForm";
import EditProductForm from "./Components/EditProductForm";
import EditTask from "./Components/EditTask";
import editOder from "./Components/editOder";
import AdminProductTable from "./Components/AdminProductTable";
import ProductSearch from "./Components/ProductSearch";
import searchAttendance from "./Components/searchAttendance";
import taskSearch from "./Components/taskSearch";
import searchpayment from "./Components/searchpayment";
import ManageAttendancePage from "./Components/ManageAttendancePage";
import MarkAttendancePage from "./Components/MarkAttendancePage";
import TaskAllocationPage from "./Components/TaskAllocationPage";
import TaskManagementPage from "./Components/TaskManagementPage";
import paymentViewtable from "./Components/paymentViewtable";
import paymentpage from "./Components/paymentpage";
import cart from "./Components/cart";
import ProductOder from "./Components/ProductOder";
import ClientTaskManagement from "./Components/ClientTaskManagement";
 import ClientAttendance from "./Components/ClientAttendance";
// import Login from "./Components/Login";

class App extends Component {
	render() {
		return (

			<div>
				<Router>
					<Switch>
						
						{/* <Route pat exact ='/Login' component={Login} /> */}
						<Route path exact='/producthomepage' component={ProductHomePage} />
						<Route path='/addproductform' component={AddProdcutForm}/>
						<Route path='/editproductform/:id' component={EditProductForm}/>
						<Route path='/EditTask/:id' component={EditTask}/>
						<Route path='/editOder/:id' component={editOder}/>
						<Route path='/AdminProductTable' component={AdminProductTable}/>
						<Route  path='/ProductSearch/:pathParam1?' component={ProductSearch}/>
						<Route  path='/searchAttendance/:pathParam1?' component={searchAttendance}/>
						<Route  path='/taskSearch/:pathParam1?' component={taskSearch}/>
						<Route  path='/searchpayment/:pathParam1?' component={searchpayment}/>

						<Route path='/manageattendancepage' component={ManageAttendancePage}/>
						<Route path='/markattendance' component={MarkAttendancePage}/>
						<Route path='/taskallocationpage' component={TaskAllocationPage}/>
						<Route path='/taskmanagementpage' component={TaskManagementPage}/>
						<Route path='/paymentViewtable' component={paymentViewtable}/>
						<Route path='/paymentpage/:id' component={paymentpage}/>
						<Route path='/cart' component={cart}/>
						<Route path='/ProductOder/:id' component={ProductOder}/>
						<Route path='/clienttaskpage' component={ClientTaskManagement}/>
						<Route path='/attendence' component={ClientAttendance}/>

						<Redirect from='*' to='/404' />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

import React, { Component } from "react";
import logo from "../images/logo.png";
import "../Styles/ProductHomePage.css";
import "../Styles/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProductTableRow from './ProductClientThrow.js';
 import "../Styles/LeftSidebar.css";
 import "../Styles/VehicleTable.css";
import axios from 'axios';
import Footer from "../Components/Footer";


export default class ProductHomePage extends Component {


	constructor(props) {
		super(props);
		this.state = { pinventory: [], search: '' };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value
		});

	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios.get('http://localhost:4000/PharmacyInventory/getall/')
			.then(response => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ pinventory: response.data });

			})
			.catch(function (error) {
				console.log(error);
			})
	}

	tabRow() {
		return this.state.pinventory.map(function (object, i) {
			return <ProductTableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}




	render() {
		return (
			<div className='ProductHomePage'>
	<div className='left-sidebar'>
					<img src={logo} alt='' className='header-logo' />
					<div className='component-name dashboard'>
						<div className='text'>
							<a href='/producthomepage'>Product</a>
						</div>
					</div>
					<div className='component-name farmer'>
						<div className='text'>
							<a href='/farmer'> Attendance</a>
						</div>
					</div>
					<div className='component-name vendor'>
						<div className='text'>
							<a href='/vendor'> Payment</a>
						</div>
					</div>
					<div className='component-name products'>
						<div className='text'>
							<a href='/product'> Payment History</a>
						</div>
					</div>
					<div className='component-name clients'>
						<div className='text'>
							<a href='/client'>Product Admin</a>{" "}
						</div>
					</div>
					<div className='component-name dashboard'>
						<div className='text'>
							<a href='/dashboard'>Task</a>
						</div>
					</div>
					<div className='component-name dashboard'>
						<div className='text'>
							<a href='/dashboard'> Dashboard</a>
						</div>
					</div>
				</div>
				<div className='right-side'>


				<button type="submit" className="checkcart">  <a href={"/cart"} >Cart</a></button>
					<h2>Inventory Management</h2>

					<form onSubmit={this.onSubmit}>
						<table className='table1'>
							<tr>
								<td>
									<p>Search Product</p>
								</td>
								<td>
									<input type='text' placeholder='search...' required value={this.state.search} onChange={this.onChangeSearch} />
								</td>
								<td>
									<button type="submit" className="search">  <a href={"/ProductSearch/" + this.state.search} className="link2" >Search</a></button>
								</td>
								<td>
									<select name="" id="" required value={this.state.search} onChange={this.onChangeSearch}>
										<option value='Personal Care Products'>Personal Care Products</option>
										<option value='Herbal and Natural Remedies'>Herbal and Natural Remedies</option>
										<option value='Vaccines'>Vaccines</option>
										<option value='Beauty Products'>Beauty Products</option>

									</select>


									{/* <input type="text" placeholder="Search..." className="search" required value={this.state.search} onChange = {this.onChangeSearch}/> */}



								</td>

							</tr>
						</table>
					</form>

					

					<p className='list'>Product List</p>


					<div className='row-frm'>
						<table className='table table-striped table2' style={{ marginTop: 20 }}>
							<thead>
								<tr>
									<th>Item name</th>
									<th>Item Price</th>
									<th>Item Catogory</th>
									<th>Product No</th>
									<th>Quantity</th>
									<th>Description</th>

									<th colSpan='3'></th>
								</tr>
							</thead>
							<tbody>{this.tabRow()}</tbody>
						</table>

					</div>






				</div>
				<Footer />
			</div>
		);
	}
}

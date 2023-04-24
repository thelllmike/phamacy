/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PTableRow from "./paymentRow";
import Footer from "../Components/Footer";


export default class Payment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			payment: [],
			search: "",
			email: this.props.match.params.id,
		};
		// this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		
		axios.get('http://localhost:4000/payment/getall/')
			.then((response) => {
				// alert('Pass una')

				this.setState({ payment: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.payment.map(function (object, i) {
			return <PTableRow obj={object} key={i} />;
		});
		
	}

	 exportPDF = () => {
         const unit = "pt";
         const size = "A4"; // Use A1, A2, A3 or A4
         const orientation = "portrait"; // portrait or landscape
         const marginLeft = 40;
	 	const doc = new jsPDF(orientation, unit, size);
         doc.setFontSize(15);
         const title = "My Oder Report";
         const headers = [["fname", "lname", "amount","cardnumber","date","status"]];
         const data = this.state.payment.map(elt=> [elt.fname, elt.lname,  elt.amount,elt.cardnumber, elt.date, elt.status]);
         let content = {
           startY: 50,
           head: headers,
           body: data
         };
         doc.text(title, marginLeft, 40);
         doc.autoTable(content);
         doc.save("report.pdf")
       }

	render() {
		return (
			<div className='adminVehicleProfile'>
			
				<br /> <h3 align='center'>payment History</h3>
				<div className='row-frm'>

				<form onSubmit={this.onSubmit}>
                        <table className="table2">
                        <tr> 
                               
                                <td> 
                                    <input type="text" placeholder="Search..." required value={this.state.search} onChange={this.onChangeSearch} />
                                </td>
                                <td> 
                                    <button type="submit" className="search"> 
                                    <a href={"/searchpayment/" + this.state.search} className="link2" >Search</a>
                                    </button>
                                </td>
                           
                            </tr>
                            
                            
                        </table>
                        </form>

					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last</th>
								<th>amount</th>
								<th>cardnumber</th>
								<th>date</th>
								<th>cvv</th>
								<th>status</th>
								


								 <th colSpan='5'>Action</th> 
							</tr>
						</thead>
						 <tbody>{this.tabRow()}</tbody> 
					</table>
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
			
 <Footer />
			</div>
		);
	}
}

/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TableRow from "./paymentRow";
import Footer from "../Components/Footer";
// import TableRow from "./cartRow";

export default class Payment extends Component {
	constructor(props) {
		super(props);
		this.state = { payments: [] };
		// this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	


    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/payment/psearch/'+this.props.match.params.pathParam1)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({product : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }


	tabRow() {
		return this.state.payments.map(function (object, i) {
			return <TableRow obj={object} key={i} />;
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
         const headers = [["fname", "lname","email", "amount","cardnumber","date","status"]];
         const data = this.state.payments.map(elt=> [elt.fname, elt.lname,  elt.email,elt.amount, elt.cardnumber, elt.date, elt.status]);
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
			<div >
				<div className="header">
					<p>Payment History Page</p>
				</div>
		
			<div className='adminVehicleProfile'>
			
				<br /> <h3 align='center'>Payment History</h3>
				<div className='row-frm'>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Category</th>
								<th>pieces</th>
								<th>total</th>
								<th>Payment</th>


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
				</div>
				<Footer />
			</div>
		);
	}
}

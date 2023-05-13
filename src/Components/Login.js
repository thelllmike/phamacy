import  React, {Component} from 'react';
import axios from 'axios';

import {BrowserRouter as Router, Link} from "react-router-dom";
// import Footer from "../Components/Footer";



// import './css/LandingPage.css';



export default  class Login extends  Component{
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
         this.onChangestaffid = this.onChangestaffid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:'',
            password:'',
            staffid:''
        }
    }
    onChangeUsername(e){
        this.setState( {
            username: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }

     onChangestaffid(e){
         this.setState( {
             staffid: e.target.value
         });
     }
    onSubmit(e){
        e.preventDefault();
        const staffid = this.state.staffid;
        let object = {
            email : this.state.email,
            password : this.state.password,
           
        };


        if ((this.state.email === "admin@gmail.com") && (this.state.password === "admin123")) {
            //  const Station = "Hotel";
              this.props.history.push('/HomepageAdmin/'+staffid);
     
         }
        //  else {
        //       axios.post('http://localhost:4000/login',object)
        //           .then(res => {
        //               if(res.data.message === "Successful Login"){
        //                   // alert(res.data.message)
        //                   // alert(Email)
        //                   this.props.history.push('/Homepage/'+staffid);
        //                 // this.props.history.push('/');
        //               }
        //               else{
        //                   // alert(res.data.message)
        //                   this.props.history.push('/login');
        //               }

        //           });
        //  }
         

        this.setState({
            username :'',
            password :''
        })
    }

    render() {
        return(
            <div class = "wrap">
            
                <br/>
                <div className="container" style={{marginTop:10, width:'30%'}}>
                    <h3 className="text-center">Sign In</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username :</label>
                            <input type ="text" className="form-control" placeholder="username" value={this.state.username} onChange = {this.onChangeUsername}/>
                        </div>
                        <div className="form-group">
                            <label>Staff ID :</label>
                            <input type ="text" className="form-control" placeholder="username" required value={this.state.staffid} onChange = {this.onChangestaffid} />
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="password" className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Sign In" className="btn btn-info"/>
                        </div>
                    </form>
                </div>
                <br/><br/>
             
                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                {/* <Footer/> */}
            </div>
        )
    }
}

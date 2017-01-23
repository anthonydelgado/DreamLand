import React from 'react';
import $ from 'jquery';
import {withRouter,Link} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';
import Home from './home.jsx'
import Register from './register.jsx';

const Login = React.createClass({
	getInitialState(){
		return {username: '', password: ""}
	},
	submitLogIn(e){
		e.preventDefault()
		console.log("submitLogIn??????????")
		$.ajax({
			method: "GET",
			url: 'api/users/validate',  
			data: this.state
			}).done((data)=>{
			  console.log(data)
			})

	},
	handleChange(key, e){
		this.setState({[key]: e.target.value})
	},
 	render: function() {
	    return (
	      <div>
               <div className="background">
           
             <div style={{width: '100vw', height: '100vh'}} data-vide-bg={require("./images/Manhatten-Night.mp4")} data-vide-options=" position: 0% 0%"></div>
             <div className="overlay">
			  <div id="sign">
                <h1 id="signUp"><Link to="register">Sign Up</Link></h1> 
              </div>
			 <center>
                <form id="loginForm">
		        	Username:
		        	<input id="login" onChange={this.handleChange.bind(this, "username")} type="text"/>
		        	Password:
		        	<input id="login" onChange={this.handleChange.bind(this, "password")} type="text"/>
		        	<button id ="subButton" onClick={this.submitLogIn}>Sign In</button>
		        </form>
			 </center>
             </div>
		  </div>
		  
	      </div>
		);
	}
});

export default Login;







  



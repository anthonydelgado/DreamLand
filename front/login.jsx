import React from 'react';
import $ from 'jquery';
import {withRouter,Link} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';
import Home from './home.jsx'
import Register from './register.jsx';
import axios from 'axios';

const Login = React.createClass({
	getInitialState(){
		return {username: '', password: ""}
	},
	submitLogIn(e){
		e.preventDefault()
		axios.post('/api/users/login/', this.state)
			.then( (res) => {
				console.log(res)
				this.props.router.push('/');
			})
			.catch( (err) => {
				console.log(err)
			})


	},
	handleChange(key, e){
		this.setState({[key]: e.target.value})
	},
 	render() {
 		console.log(this.props)
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
		);
	}
});

export default Login;







  



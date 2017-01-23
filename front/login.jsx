import React from 'react';
import $ from 'jquery';

const Login = React.createClass({
	getInitialState(){
		return {username: '', password: ""}
	},
	submitLogIn(e){
		e.preventDefault()
		console.log("submitLogIn??????????")
		$.ajax({
			method: "GET",
			url: 'api/users/validate/',  
			data: this.state
		})
		.done((data)=>{
			//   console.log(data)
			$.ajax({
			  url: '/api/users/validate/userid', 
			  method:'GET'
			})
			.done(()=>{
			  this.props.router.push('/')
			})
		})		

	},
	handleChange(key, e){
		this.setState({[key]: e.target.value})
	},
 	render() {
 		console.log(this.props)
	    return (
	      <div>
	      
		        <form>
		        	Username:
		        	<input onChange={this.handleChange.bind(this, "username")} type="text"/>
		        	Password:
		        	<input onChange={this.handleChange.bind(this, "password")} type="text"/>
		        	<button onClick={this.submitLogIn}>Submit</button>
		        </form>
	      </div>
		);
	}
});

export default Login;
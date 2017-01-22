import React from 'react';
import $ from 'jquery';

const Login = React.createClass({
	getInitialState(){
		return {username: '', password: ""}
	},
	submitLogIn(){
		$.ajax({
			method: "POST",
			url: '/login',  
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
	      
		        <form>
		        	Username:
		        	<input nChange={this.handleChange.bind(this, "username")} type="text"/>
		        	Password:
		        	<input nChange={this.handleChange.bind(this, "password")} type="text"/>
		        	<button onClick={this.submitLogIn}>Submit</button>
		        </form>
	      </div>
		);
	}
});

export default Login;
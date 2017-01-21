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
	updateUserName(e){
		return this.setState({username: e.target.value})
	},
	updatePassword(e){
		return this.setState({password: e.target.value})
	},
 	render: function() {
	    return (
	      <div>
		        <form>
		        	Username:
		        	<input onChange={this.updateUserName} type="text"/>
		        	Password:
		        	<input onChange={this.updatePassword} type="text"/>
		        	<button onClick={this.submitLogIn}>Submit</button>
		        </form>
	      </div>
		);
	}
});

export default Login;
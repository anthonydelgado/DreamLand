import React from 'react';
import axios from 'axios';
// import $ from 'jquery';

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
import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'


const Registration = React.createClass({
	getInitialState(){
		return {
			username: '',
			email: '',
			password: ''
		}
	},
	handleChange(key ,event){
    this.setState({[key]: event.target.value})
  	},
  	handleSubmit(event){
  	event.preventDefault()
    const {username, email, password} = this.state
	    $.ajax({
	      url: '/api/users',
	      type: 'POST',
	      data: {
	      	username, 
	      	email, 
	      	password
	      }
	    })
 	 },
	render(){
		console.log(this.state)
		return(
			<form  onSubmit={this.handleSubmit} >
				<div >
				User Name:
				<input onChange={this.handleChange.bind(this, 'username')} type='text' value={this.state.name}  onChange={this.handleChange.bind(this,"username")}/>
				</div><br />
					<div >
				Email:
				<input onChange={this.handleChange.bind(this, 'email')} type='email' value={this.state.email} onChange={this.handleChange.bind(this,"email")} />
				</div><br />
					<div >
				Password:
				<input onChange={this.handleChange.bind(this, 'password')} type='Password' value={this.state.password} onChange={this.handleChange.bind(this, "password")} />
				</div><br /> 
				<input type='submit' value='Signup!'/>
			</form>
		)
	}

})

module.exports = Registration

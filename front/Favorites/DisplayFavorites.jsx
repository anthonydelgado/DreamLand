import React from 'react';
import axios from 'axios';

const DisplayFavorites = React.createClass({
	getInitialState(){
		return{user: null, favs: null}
	},

	componentDidMount(){
		axios.get('/api/users/validate')
			.then( (res) => {
				axios.get('/api/users/userprofile')
					.then( (res) => {
						console.log(res);
					})
			})
			.catch( (err) => {
				console.log("it failed!", err);
				alert("You need to log in to view this page");
				this.props.router.push("/login");
			})
	},

	render(){
		return (
			<div>
				hello from favs
			</div>
		)
	}
})

export default DisplayFavorites;
import React from 'react';
import axios from 'axios';

const DisplayReviews = React.createClass({
	getInitialState(){
		return {reviews: []}
	},

	componentDidMount(){
		let reviews = []
		this.props.provIds.forEach( (id) => {
			axios.get(`/api/review/providerId/${id}`)
	    	.then( (res) => {
	       reviews.push(res.data);
	     	})
	     	.then( () => {
				  this.setState({reviews: reviews})
	     	})
				.catch( (err) => {
					console.log(err);
				});
		})
	},

	render(){
		console.log(this.props.provIds)
		return (
			<div>
				Hello from reviews!
			</div>
		)	
	}
}) 

export default DisplayReviews;
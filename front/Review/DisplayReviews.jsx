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
				.catch( (err) => {
					console.log(err);
				});
		})
		.then( () => {
			console.log("WOOOOOOOOOOOOOOOOOOOOOOOOO")
			this.setState({reviews: reviews})
	  })
	},

	render(){
		console.log("PROPS ====>",this.props.provIds)
		console.log("STATE ====>",this.state)
		return (
			<div>
				Hello from reviews!
			</div>
		)	
	}
}) 

export default DisplayReviews;
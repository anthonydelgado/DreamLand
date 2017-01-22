import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';

const SearchBar = React.createClass({
	getInitialState(){
		return{zipcode: "", age: "", status: "", attr: ""}
	},

	handleChange(event){
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]: value});
	},

	makeQuery(){
		if(this.state.zipcode){
			browserHistory.push(`/search?zipcode=${this.state.zipcode}&age=${this.state.age}&status=${this.state.status}&attr=${this.state.attr}`)
			this.props.refresh ? this.props.refresh() : null;
		} else {
			alert("No zipcode entered, please enter a zip")
		}
	},

	render(){
		let imgStyle={width: 50, height: 50}
		return(
			<div>
				<input onChange={this.handleChange} type="text" name="zipcode" placeholder="Zip Code here..."></input> 
				<input onChange={this.handleChange} type="checkbox" name="age" value="young+adult" /> Young Adult
				<input onChange={this.handleChange} type="checkbox" name="status" value="undocumented" /> Undocumented
				<input onChange={this.handleChange} type="checkbox" name="attr" value="lgbtq" />LGBTQ
				<img onClick={this.makeQuery} src={require('../images/search-icon.png')} alt="search-icon" style={imgStyle} />
			</div>
		)
	}
});


export default SearchBar;
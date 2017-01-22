import React from 'react';
import $ from 'jquery';
import RestaurantId from './singleRestaurant.jsx'
 
const AddReview = React.createClass({ 
  getInitialState: function() {
    return ({
      rating:0,description:"",date:""
    });
  },
  addReview: function() {
    $.ajax({
      url: '',
      type: 'POST',
      data: this.state
    })
    .done((data) => {
      this.setState({ rating: data.rating, description: data.description, date: data.date
      });
    })
  },
  handleRatingChange: function(event){
    this.setState({rating: event.target.value })
  },
  handleDateChange: function(event){
    this.setState({date: event.target.value })
  },
  handleDescriptionChange: function(event){
    this.setState({description: event.target.value })
  },
  render: function() {
    return(
    <div>
       <form>
          <br/>
          <select onChange={this.handleRatingChange} value={this.state.rating}>
            <option value='1'>*</option>
            <option value='2'>**</option>
            <option value='3'>***</option>
            <option value='4'>****</option>
            <option value='5'>*****</option>
          </select>
          <input onChange={this.handleDateChange} type='date' value={this.state.date} placeholder='Date'/>
          <input onChange={this.handleDescriptionChange} type='text' value={this.state.description} placeholder='Description'/>
          <button onClick={this.addReview}>Add Review</button>
          <br/>
      </form>
    </div>
    )
  }
})

export default AddReview;
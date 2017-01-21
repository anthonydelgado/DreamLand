var React = require('react');
var $ = require('jquery');
var AddReview = require('./addReview.jsx');

var OneOrg = React.createClass({
  getInitialState: function() {
    return ({
      name: '', neighborhood:'', address: '', reviews:[]
    });
  },
  componentDidMount: function() {
      $.ajax({
      url: '' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      console.log('this is the response from the get call on single',data)
      this.setState({ name: data.name, neighborhood: data.neighborhood, address: data.address, reviews: data.Reviews});
    })
  },  
  render: function() {
    //var OneOrgId = this.props.params.id
    if(this.state.reviews) {
      return(
        <div>
           <div><h1>{this.state.name}</h1></div>
           <p>Neighborhood: {this.state.neighborhood}</p>
           <p>Adress: {this.state.address}</p>
           <ul>
             {this.state.reviews.map(function(review){
                  return (
                    <li key={review.id}>
                    <h3>Review {review.id}</h3>
                       <p>Rating: {review.rating}</p>
                       <p>Date: {review.date}</p>
                       <p>Description: {review.description}</p>
                    </li>
                  )
              })}
           </ul>
           
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})
//<NewReview OneOrgId={OrgId}/>
module.exports = SingleRestaurant
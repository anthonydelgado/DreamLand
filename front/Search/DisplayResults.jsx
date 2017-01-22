import React from 'react';
import {Link} from 'react-router'
import axios from 'axios';

//Component
import SearchBar from './SearchBar.jsx';

const DisplayResults = React.createClass({
  getInitialState(){
  	return{programs: null, reviews: null}
  }, 

  componentDidMount(){
  let age = 'adult';
  let query = this.props.location.query;
  let queries = "";

  query.age ? age = query.age : null;
  for (let key in query){
    if(query[key] && key !== 'age' && key !== 'zipcode'){
      queries += (query[key] + ',')
    }
  }
  !queries ? queries = "legal" : null

 	let url = 'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'
	let zipcode = query.zipcode
	let attributes = `/programs?api_key=b30f1b9f41161c0fb3b39cb49aff8104&attributeTag=${age},${queries}&cursor=0&limit=50`

  console.log(url + zipcode + attributes)
  axios.get(url + zipcode + attributes)
    .then( (res) => {
      let reviews = []
      let idArr = res.data.programs.map( (program) => program.id)
      idArr.forEach( (id) => {
        axios.get(`/review/${id}`)
          .then( (res) => reviews.concat(res.data) )
      })
      console.log("this is res.data.programs===========>",res.data.programs)
      this.setState({programs: res.data.programs, reviews: reviews})
    })
    .catch( (err) => {
      console.log(err);
    });
  },

  refresh(){
    window.location.reload();
  },

  render(){
    let programs = this.state.programs
    let reviews = this.state.reviews
  	return (
  		<div>
  			<SearchBar refresh={this.refresh}/>
        {!programs ? <img src={require('../images/loading_icon.gif')}></img> : 
          programs.map( (program, idx) => {
            return (
              <div key={idx}>
                <h1>{program.name}</h1>
                {program.description}
                <p>Distance: {program.distance} miles</p>
                <p>{program.offices[0].address1} {program.offices[0].postal} {program.offices[0].city},{program.offices[0].state}</p>
                <Link to={program.website_url}><p>{program.website_url}</p></Link>
              </div>
            )
          })
        }
        {!reviews ? null :
          reviews.map( (review, idx) => {
            return (
              <div key={idx}>
                Rating: {"*".repeat(review.rating)}
                <p>review.comment</p>
              </div>
            )
          })
        }	
      </div>
  	)
  }
});

export default DisplayResults;
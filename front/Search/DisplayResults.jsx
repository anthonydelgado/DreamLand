import React from 'react';
import {Link} from 'react-router'
import axios from 'axios';

const DisplayResults = React.createClass({
  getInitialState(){
  	return{programs: null}
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
    .then( (response) => {
      console.log("this is response.data.programs===========>",response.data.programs)
      this.setState({programs: response.data.programs})
    })
    .catch( (err) => {
      console.log(err);
    })
  },

  render(){
    let programs = this.state.programs
  	return (
  		<div>
  			<p>hello from DisplayResults</p>
        {!programs ? null : 
          programs.map( (program, idx) => {
            return (
              <div key={idx}>
                <h1>{program.name}</h1>
                <p>{program.description}</p>
                <p>Distance: {program.distance} miles</p>
                <p>{program.offices[0].address1} {program.offices[0].postal} {program.offices[0].city},{program.offices[0].state}</p>
                <Link to={program.website_url}><p>{program.website_url}</p></Link>
              </div>
            )
          })
        }	
      </div>
  	)
  }
});

export default DisplayResults;
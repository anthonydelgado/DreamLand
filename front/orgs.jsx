import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router';
// var OneOrg = require('./oneOrg.jsx');

const Orgs = React.createClass({
  getInitialState: function() {
    return ({orgs: []})
  },
  componentDidMount: function() {
    $.ajax({
      url: 'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=b30f1b9f41161c0fb3b39cb49aff8104&serviceTag=food+pantry&cursor=0&limit=50',
      type: 'GET'
    })
    .done((data) => {
      this.setState({orgs: data});
    })
  },
  render: function() {
  if(this.state.orgs) {
      return(
        <div>
        <ul>
          {this.state.orgs.map(function(org){
            return (
              <li key={orgs.id}>
              <Link to={'/organizations/' + org.id}> {org.name}</Link>
              </li>
              )})}
          </ul>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default Orgs;
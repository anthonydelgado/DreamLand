var React = require('react');
var $ = require('jquery');
import {Link} from 'react-router';
// var OneOrg = require('./oneOrg.jsx');

var Orgs = React.createClass({
  getInitialState: function() {
    return ({orgs: []})
  },
  componentDidMount: function() {
    $.ajax({
      url: '',
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

module.exports = Orgs;
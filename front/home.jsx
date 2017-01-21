var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';

var Home = withRouter(React.createClass({
  render: function() {
    return(
      <div>
      <h1>Dream Land</h1>
        
      </div>
    )
  }
}))

module.exports = Home
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Orgs = require('./org.jsx');
var Home = require('./home.jsx');
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';

var App = withRouter(React.createClass({
  render: function() {
    return(
      <div>
      <h1>Dream Land</h1>
      <Home />
        {this.props.children}
      </div>
    )
  }
}))

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='organizatons' component={Orgs}></Route>
    <Route path='organizatons/:id' component={OneOrg}></Route>
  </Router>,
  document.getElementById('root')
)
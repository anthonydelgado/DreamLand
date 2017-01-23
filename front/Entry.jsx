import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

//Components
import Orgs from './orgs.jsx';
import Home from './home.jsx';
import SearchBar from './Search/SearchBar.jsx'
import DisplayResults from './Search/DisplayResults.jsx'
import Registration from './register.jsx'
import Login from './login.jsx'

//Styling
import './CSS/App.css';
import './CSS/navbar.css'

const App = (props) => {
  return (
    <div>
      
      {props.children}
    </div>
  )
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home} />
      <Route path='organizatons' component={Orgs}></Route>
      <Route path='/search' component={DisplayResults}></Route>
      <Route path='/register' component={Registration}></Route>
      <Route path='/login' component={Login}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
      // <Route path='organizatons/:id' component={OneOrg}></Route>
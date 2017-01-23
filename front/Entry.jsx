import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import {withRouter, Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

//Components
import Orgs from './orgs.jsx';
import Home from './home.jsx';
import SearchBar from './Search/SearchBar.jsx'
import DisplayResults from './Search/DisplayResults.jsx'
import Registration from './register.jsx'

//Styling
import './CSS/App.css';

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
=======
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Style from './views/style.css';
 

const App = React.createClass ({
	render() {
		var data = [{
	        "provider_name": {
				"name": "espanol law services"
			},
			"providerID" : {
				"id": "1"
			},
			"description": {
				description: "law services"
			},
			"url" : {
				url: "www.facebook.com"
			},
			"address" : {
				address: "123 melon street 11235"
			},
			"email" : {
				email: "lawyer@yahoo.com"
			}
         	
// }, {
// 	"provider_name": "abc legal services",
// 	"description": "Lawyers for immigrants"
// }, {
// 	"provider_name": "abc legal services",
// 	"description": "Lawyers for immigrants"
}]
	return (
		
	  <div>
        {data.map(function(provider,idx){
			return (
				<div key={idx} className="Info">
				  <img src="http://beachcityauto.com/wp-content/uploads/2016/02/icon-placeholder-200x200.png" height="95px"/>
				  <h1>{provider.provider_name.name}</h1>
				  <h2> {provider.description.description} </h2>
				  <h2> {provider.url.url} </h2>
				  <h2> {provider.address.address} </h2>
				  <h2> {provider.email.email} </h2>
				</div>
			)
		})}
 
      </div>
	)
	}
})
>>>>>>> 953766e9d3863439b584e0d5df7753f354e6d091

    </Route>
  </Router>,
  document.getElementById('root')
)
      // <Route path='organizatons/:id' component={OneOrg}></Route>
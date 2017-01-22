import React from 'react';
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

render(
		<App />,
	document.getElementById('root')
);
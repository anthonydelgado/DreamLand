import React from 'react';
import {Link} from 'react-router'
import $ from 'jquery';

const Test = React.createClass({
  getInitialState: function (){
  	return{info: []}
 }, 
  componentDidMount(){
  	// var attr = 'adult'
  	// if () { attr = 'whatever instate'
 	const url = 'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'
	const zipcode = '10001'
	const attributes = '/programs?api_key=b30f1b9f41161c0fb3b39cb49aff8104&attributeTag=adults&cursor=0&limit=50'
    $.ajax({
      url: url + zipcode + attributes,
      type: 'GET'
    }).done((data)=>{
       console.log("this is data===========>",data.programs)
      this.setState({info: data})
   
    })
  },
  render(){
  	console.log(this.info)
  	console.log("PROPS =========>", this.props)
  	return(
  		<div>
  			<Link to={"/test2" + "?a=1&b=2&c=3"}><p>hello from test1</p></Link>
  		
          </div>
  		)
  	}
 })

module.exports = Test

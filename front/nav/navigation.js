import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router'



const Navbar = () => (
	<div className="menu">
	    <div className="container-fluid">
			<div className="navbar-header">
				<Link to='/'><button className="glyphicon glyphicon-user"></button> Sign Up</Link>
			</div>
			<div>
				<ul className="nav navbar-nav navbar-right">
					<Link to='/register'><button className="glyphicon glyphicon-user"></button> Sign Up</Link>
					<Link to='/login'><button className="glyphicon glyphicon-log-in"></button> Login</Link>
	
				</ul>
			</div>
		</div>
	</div>
);

export default Navbar



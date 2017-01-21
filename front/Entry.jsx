import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const App = (props) => {
	return (
		<div>
			Hello world!
		</div>
	)
};

render(
		<App />,
	document.getElementById('root')
);
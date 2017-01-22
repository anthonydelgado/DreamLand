import React from 'react';

const Test2 = (props) => {
	console.log(props)
	console.log(props.location.query.a)
	console.log(props.location.query.b)
	console.log(props.location.query.c)
	return(
		<div>
			Hello from test!
		</div>
	)
}

export default Test2;

const Review = require('../models').Review;

Review.sync({ force: true })
	.then( () => {
		Review.bulkCreate([{
		  rating: 1,
		  comment: "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
		  UserId: 1,
		  ProviderId: 1
			}, {
		  rating: 4,
		  comment: "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
		  UserId: 2,
		  ProviderId: 2
			}, {
		  rating: 3,
		  comment: "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
		  UserId: 3,
		  ProviderId: 3
			}, {
		  rating: 5,
		  comment: "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
		  UserId: 4,
		  ProviderId: 4
			}, {
		  rating: 5,
		  comment: "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
		  UserId: 5,
		  ProviderId: 5
			}, {
		  rating: 2,
		  comment: "pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
		  UserId: 6,
		  ProviderId: 6
			}, {
		  rating: 3,
		  comment: "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
		  UserId: 7,
		  ProviderId: 7
			}, {
		  rating: 3,
		  comment: "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
		  UserId: 8,
		  ProviderId: 7
			}, {
		  rating: 2,
		  comment: "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
		  UserId: 9,
		  ProviderId: 2
			}, {
		  rating: 5,
		  comment: "praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
		  UserId: 10,
		  ProviderId: 1
		}])
	})
	.catch( (err) => {
		console.log(err);
	});
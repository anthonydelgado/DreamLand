const Review = require('../models').Review;

Review.sync({ force: true })
	.then( () => {
		Review.bulkCreate([{
		  rating: 1,
		  comment: "Didn't think they were very helpful. Staff was rude.",
		  UserId: 1,
		  ProviderId: 1
			}, {
		  rating: 3,
		  comment: "Very helpful",
		  UserId: 1,
		  ProviderId: 3
			}, {
		  rating: 4,
		  comment: "Awesome people and service!",
		  UserId: 1,
		  ProviderId: 4
			}, {
		  rating: 4,
		  comment: "At turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
		  UserId: 2,
		  ProviderId: 2
			}, {
		  rating: 3,
		  comment: "Neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
		  UserId: 3,
		  ProviderId: 3
			},{
		  rating: 2,
		  comment: "Sapien placerat ante nullales scelerisque mauris sit amet eros suspendisse accumsan rhoncus sed vestibulum sit ame",
		  UserId: 3,
		  ProviderId: 5
			}, {
		  rating: 5,
		  comment: "Rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
		  UserId: 4,
		  ProviderId: 4
			}, {
		  rating: 5,
		  comment: "Nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
		  UserId: 2,
		  ProviderId: 5
			}])
	})
	.catch( (err) => {
		console.log(err);
	});
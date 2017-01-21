const reviewRouter = require('express').Router();

const Review = require('../models').Review;
const Provider = require('../models').Provider;


// GET reviews by providerId
const fetchReviewsByProviderId = (req, res) => {
	Provider.findOne({
		where: {
			providerId: req.params.id,
			include: [Review]
		},
	})
	.then( (provider) => {
		res.send(provider);
	})
	.catch( (err) => {
		console.log(err);
		re.sendStatus(500);
	});
};



// DELETE a review by id 
const deleteReview = (req, res) => {
	Review.destroy({
		where: {id: req.params.id}
	})
	.then( ()=> {
		res.sendStatus(200);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};

// POST new Review
const createNewReview = (req, res) => {
	Review.create(req.body)
		.then( (newReview) => {
			res.send(newReview);
		})
		.catch( (err) => {
			console.log(err);
			res.sendStatus(500);
		});
};

//  ROUTES
reviewRouter.route('/')
	.post(createNewReview);

reviewRouter.route('/reviewId/:id')
	.delete(deleteReview);

reviewRouter.route('/providerId/:id')
	.get(fetchReviewsByProviderId);


module.exports = reviewRouter;
const favRouter = require('express').Router();

const Favorites = require('../models').Favorites;

// DELETE a Favorites by id 
const deleteFavorite = (req, res) => {
	Favorites.destroy({
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

// POST new Favorites
const createNewFavorite = (req, res) => {
	Favorites.create(req.body)
		.then( (newFav) => {
			res.send(newFav);
		})
		.catch( (err) => {
			console.log(err);
			res.sendStatus(500);
		});
};

//  ROUTES
favRouter.route('/')
	.post(createNewFavorite);

favRouter.route('/reviewId/:id')
	.delete(deleteFavorite);


module.exports = favRouter;
const userRouter = require('express').Router();

const User = require('../models').User;


// GET user by id. Include favorites and reviews in response.
const getUserById = (req, res) => {
	User.findById(req.params.id, {
		include: [{all:true}]
	})
	.then( (user) => {
		res.send(user)
	})
	.catch( (err) => {
		console.log(err);
		re.sendStatus(500);
	});
};



// DELETE a User by id 
const deleteUser = (req, res) => {
	User.findById(req.params.id)
	.then((user)=> {
		user.destroy()
	})
	.then( ()=> {
		res.sendStatus(200);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};

// POST new User
const createNewUser = (req, res) => {
	User.create(req.body)
		.then( (newUser) => {
			res.send(newUser);
		})
		.catch( (err) => {
			console.log(err);
			res.sendStatus(500);
		});
};

// const fetchUser = (req, res) => {
// 	if (!req.session.UserId) return res.sendStatus(401);
// 	User.findById(req.session.UserId, {
// 		include: [{all: true}]
// 	})
// 	.then( (user) => {
// 		res.send(user);
// 	})
// 	.catch( (err) => {
// 		console.log("Problem returning logged in user info: ", err);
// 		res.sendStatus(500);
// 	})
// }


//  ROUTES
userRouter.route('/')
	.post(createNewUser)

userRouter.route('/userId/:id')
	.get(getUserById)
	.delete(deleteUser)

// userRouter.route('/userprofile')
// 	.get(fetchUser)




module.exports = userRouter;
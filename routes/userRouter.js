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


const authUser = (req,res) => {
   if(req.session.UserId) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }

}

const fetchUser = (req, res) => {
	if (!req.session.UserId) return res.sendStatus(401);
	User.findById(req.session.UserId, {
		include: [{all: true}]
	})
	.then( (user) => {
		res.send(user);
	})
	.catch( (err) => {
		console.log("Problem returning logged in user info: ", err);
		res.sendStatus(500);
	})
}

//validates a user
//user needs email + password

// const authenticateUser = (req, res) => {
//   console.log("authenticateUser!!", req.body)
//   console.log("authenticateUser!!", req.query);
//   const {userInfo} = req.query

//   User.findOne({
//     where: userInfo
//   })
//   .then((user) => {
//   	console.log('user==========>',user)
//     if(user){
//       req.session.userID = user.id;
//       req.session.save();
//       console.log("SESSION =====>", req.session)
//       res.send(req.session.userID);
//     } else {
//       res.sendStatus(403)
//     }
//   })
//   .catch((err) => {
//   	console.log('errr======>', err)
//     res.sendStatus(500)
//   })
// }
//if the user already exist, it will be deredected
// const isAuthenticated = (req, res) => {
//   console.log(req.session)
//   if(req.session.userID){
//     User.findById(req.session.userID)
//     .then((data) => {
//       res.send(data)
//     })
//   }else {
//     res.send(false);
//   }
// }


//handles the initial log in.
const userLogin = (req,res) =>{
  var userInfo = req.body;
  User.sync()
  .then(() => {
    return User.findOne({
      where: {
        username: userInfo.username,
        password: userInfo.password
      }
    })
  })
  .then((user) => {
    if(user) {
      req.session.UserId = user.id;
      req.session.save();
      console.log('session: ', req.session);
      res.send(user);
    } else {
      res.send('Incorrect password!').status(403);
    }
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
};


//one more route on enter of app ====> check if req.session.id exists
//if it does find user by id and send back data
//if it doesn't send back a falsey value


// router.route('/')
//   .post(userLogin)


// router.route('/')
//   .get(auth)

// userRouter.route('/validate/userid')
//   .get(isAuthenticated)



//  ROUTES
userRouter.route('/')
  .post(createNewUser)

userRouter.route('/login')
  .post(userLogin)

userRouter.route('/userId/:id')
  .get(getUserById)
  .delete(deleteUser)

userRouter.route('/validate')
  .get(authUser)

userRouter.route('/userprofile')
 .get(fetchUser)




module.exports = userRouter;
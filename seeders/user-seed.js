const User = require('../models').User;

//.sync() will create out table.
User.sync({ force:true })//force:true will clear our database of information
	.then( () => {
		User.bulkCreate([{
	  username: "gabe",
	  email: "bmendoza0@vistaprint.com",
	  password: "gabesux"
		}, {
	  username: "jBenitez1",
	  email: "wford1@i2i.jp",
	  password: "trumpsux"
		}, {
	  username: "valerio",
	  email: "val@gmail.com",
	  password: "aguacate"
		}, {
	  username: "montoya",
	  email: "pchapman3@netlog.com",
	  password: "plsno"
		}])
	})
	.catch( (err) => {
		console.log(err);
	});

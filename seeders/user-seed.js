const User = require('../models').User;

//.sync() will create out table.
User.sync({ force:true })//force:true will clear our database of information
	.then( () => {
		User.bulkCreate([{
	  username: "wlarson0",
	  email: "bmendoza0@vistaprint.com",
	  password: "zinZjNtOwjeL"
		}, {
	  username: "jrobinson1",
	  email: "wford1@i2i.jp",
	  password: "eIKMf2B2"
		}, {
	  username: "tharper2",
	  email: "rmorgan2@friendfeed.com",
	  password: "XSCVtd"
		}, {
	  username: "atucker3",
	  email: "pchapman3@netlog.com",
	  password: "RyIkEaW3sivs"
		}, {
	  username: "dhernandez4",
	  email: "rbaker4@godaddy.com",
	  password: "I3JrYmCJu"
		}, {
	  username: "gshaw5",
	  email: "rbradley5@nba.com",
	  password: "jk2eiPnqggAa"
		}, {
	  username: "emccoy6",
	  email: "kedwards6@github.io",
	  password: "AiWWtKzBINb"
		}, {
	  username: "greid7",
	  email: "kjohnson7@uiuc.edu",
	  password: "zkUHbZnn"
		}, {
	  username: "rramirez8",
	  email: "bperkins8@ibm.com",
	  password: "qQhiBQ0ae"
		}, {
	  username: "dsims9",
	  email: "aday9@hatena.ne.jp",
	  password: "rBegzab"
		}])
	})
	.catch( (err) => {
		console.log(err);
	});

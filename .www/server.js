const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const db = require('../models');
const path = require('path');
const router = require('../routes');
const bodyparser = require('body-parser');
const session = require('express-session');



app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));

//using session middleware

app.use(session({
  secret: 'we da bess',
  resave: true,
  saveUninitialized: true
}));

app.use("/api", router)


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../front/views/index.html'));
});

//connect database to server
db.sequelizeConnection.sync().then(function() {
	console.log("Listening on port 8888");
  app.listen(8888);
});


module.exports = app;
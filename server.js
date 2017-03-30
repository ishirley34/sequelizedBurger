'use strict'

// This requires all of the necessary packages to run the express servers and serve the content using handlebars
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 8080;

// Serves the content to public
app.use(express.static(__dirname + "/public/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Allows the use of the delete method
app.use(methodOverride("_method"));

// Points to the main.handlebars file
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller')(app);

app.listen(PORT, function() {
	console.log("App is listening on PORT " + PORT);
});
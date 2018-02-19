// Dependencies
// -----------------------------------------------------
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var methodOverride = require('method-override');
var app = express();


mongoose.connect('mongodb://localhost:27017/TranspCiklo', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(methodOverride());


require('./app/routes.js')(express,app);


app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});

app.listen(3000, function() { 
 console.log('App listening on port 3000');
});
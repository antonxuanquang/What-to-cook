
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify = require('./verify');
var Dishes = require('../models/dishSchema');

var uploadRouter = express.Router();
uploadRouter.use(bodyParser.json());

// URL: ***/upload

uploadRouter.route('/')

	.get(function(req, res, next) {
		res.send('fetch html for this section');
	})

	.post(function(req, res, next) {
		Dishes.create(req.body, function(err, dish) {
			if (err) throw err;

			console.log('Dish created!');
			var id = dish._id;
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Added the dish with id: ' + id);
		});
	})

	.delete(Verify.verifyOrdinaryUser, Verify.verifyAdminUser, function(req, res, next) {
		res.send('delete a dish');
	});


module.exports = uploadRouter;
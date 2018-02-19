// Dependencies
var mongoose = require('mongoose');
var Usua = require('../models/mdlusua.js');

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Usua.findOne({usuario:req.params.us}, function(err, user) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(user);
 });
};

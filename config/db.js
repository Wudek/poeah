'use strict';
module.exports.initialize = function ()
{
	var config = require('./config');
	var mongoose = require('mongoose');

	module.exports.db = mongoose.connect(config.db);
};
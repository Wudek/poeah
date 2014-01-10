'use strict';
module.exports.initialize = function (callback)
{
	var config = require('./config');
	var mongoose = require('mongoose');
	var logger = require('../app').logger;

	logger.info('Connection initiated to database');
	module.exports.db = mongoose.connect(config.db, {}, function()
	{
		logger.info('Connection established to database');
		callback && callback();
	});

};
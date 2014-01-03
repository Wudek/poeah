'use strict';

var mongoose = require('mongoose');

var TradeForumSchema = mongoose.Schema(
	{
		league: String,
		type: String,
		url: String
	});

module.exports.TradeForum = mongoose.model('TradeForum', TradeForumSchema);
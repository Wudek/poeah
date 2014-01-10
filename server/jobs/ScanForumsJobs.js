'use strict';

var cheerio = require('cheerio');
var request = require('request');
var _ = require('lodash');
var _s = require('underscore.string');
var utils = require('../utils');
var logger = require('../../app').logger;
var tradeForumsController = require('../controllers/tradeForumsController');

/**
 * This job will query each individual forum.
 * @constructor
 */
var scanForumsJobs = exports.ScanForumsJobs = function ()
{
	var _onFinishCallback;

	function scanForum(tradeForum, callback)
	{

		function parseHtml(err, resp, html)
		{
			if(err)
			{
				logger.error(err);
				callback && callback();
			}
			else
			{
				var parsedHtml = cheerio.load(html);
				var x = 0;
			}
		}
		request(tradeForum.url, parseHtml);
	}

	function onGetTradeForums(tradeForums)
	{
		function run()
		{
			if(tradeForums.length > 0)
			{
				var tradeForum = tradeForums.pop();
				scanForum(tradeForum, run);
			}
		}
		run();
	}

	this.run = function (onFinishCallback)
	{
		_onFinishCallback = onFinishCallback;
		tradeForumsController.getAll(onGetTradeForums);
	};
};
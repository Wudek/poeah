'use strict';
var cheerio = require('cheerio');
var request = require('request');
var _ = require('lodash');

module.exports.getForums = function()
{
	var baseUrl = 'http://www.pathofexile.com';

	function isValidForumName(name)
	{
		if(name.indexOf('Trading') === -1)
		{
			return false;
		}
		if(name.indexOf('Shops') !== -1)
		{
			return true;
		}
		if(name.indexOf('Buying') !== -1)
		{
			return true;
		}
		if(name.indexOf('Selling') !== -1)
		{
			return true;
		}
		return false;
	}

	function getForumName(subforum)
	{
		return subforum.children[0].data;
	}

	function isValidForum(subforum)
	{
		return isValidForumName(getForumName(subforum));
	}

	function createForumObject(subforum)
	{
		var splitName = getForumName(subforum).split(' ');
		var leagueName = _(splitName).first();
		var forumTypeName = _(splitName).last();
		var url = baseUrl + subforum.attribs.href;
		return {
			league: leagueName,
			type: forumTypeName,
			url : url
		};
	}

	function parseHtml(err, resp, html)
	{
		if (err) return console.error(err);
		var parsedHtml = cheerio.load(html);
		var subForums = parsedHtml('.forum_name').find('.name').find('a');
		_(subForums).forEach(function(subforum)
		{
			if(isValidForum(subforum))
			{
				var subForum = createForumObject(subforum);
				console.log(subForum);
			}
		});
	}

	request(baseUrl + '/forum', parseHtml);
}

module.exports.updateItems = function()
{
	module.exports.getForums();
};
'use strict';

var Item = require('../models/items').Item;
exports.getAll = function (req, res)
{
	Item.find().exec(
		function (err, items)
		{
			if (err)
			{
				res.render('error', {status : 500});
			}
			else
			{
				res.jsonp(items);
			}
		}
	);
};
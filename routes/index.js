/*global VARIABLE_NAME:false */
'use strict';

exports.index = function(req, res){
  res.render('index', { title: 'poeah' });
};

exports.partials = function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
};
/*global VARIABLE_NAME:false */
'use strict';


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
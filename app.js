'use strict';
//Configure logging
var logger = module.exports.logger = require('./config/logging')();
//Fallback to make sure an environment is set
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Connect to DB
require('./config/db').initialize(function ()
{
	logger.info('Configuring application');
	//Configure express, routing and api
	var app = require('express')();
	require('./config/express')(app);
	require('./config/routes')(app);

	//Configure miscellaneous
	require('./config/jobs')();

	//Start express
	var port = process.env.PORT || require('./config/config').port;
	app.listen(port);
	logger.info('Application started on port ' + port);
});


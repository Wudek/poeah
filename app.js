'use strict';
//Fallback to make sure an environment is set
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Initialize database connection
require('./config/db').initialize();

//Configure express, routing and api
var app = require('express')();
require('./config/express')(app);
require('./config/routes')(app);

//Configure miscellaneous
require('./config/jobs')();

//Start express
var port = process.env.PORT || require('./config/config').port;
app.listen(port);
console.log('Express app started on port ' + port);
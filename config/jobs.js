'use strict';


module.exports = function ()
{
	var jobs = require('../server/jobs');

//	var later = require('later');
//	var updateSchedule = later.parse.text('every 30 s');
//	later.setInterval(jobs.updateItems, updateSchedule);

	var preClear = false;
	if(preClear)
	{
		jobs.clearAndScan();
	}
	else
	{
		jobs.fullScan();
	}
};
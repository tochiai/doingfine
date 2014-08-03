var cron = require('cron');
var Schedule = require('../api/schedule/schedule.model');

module.exports.start = function() {
	var CronJob = require('cron').CronJob;
	new CronJob('00 */1 * * * *', function(){
	  Schedule.find(function (err, schedules) {
	    if(err) { throw err; }
	    console.log("Schedules: ", schedules);
	  });
	}, null, true, "America/Los_Angeles");
};
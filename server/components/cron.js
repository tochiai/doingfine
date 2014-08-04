var cron = require('cron');
var Schedule = require('../api/schedule/schedule.model');
var moment = require('moment');
moment().format();

// get day as 0-6 and time as '13:15'
var getDayTime = function() {
	var date = {};
	var now = moment();
	var hour = now.hour().toString();
	if (hour.length === 1) {
		hour = '0' + hour;
	}
	var minute = now.minute().toString();
	if (minute.length === 1) {
		minute = '0' + minute;
	}
	date.day = now.day();
	date.time = minute + ':' + hour;
	return date;
}

module.exports.start = function() {
	var CronJob = require('cron').CronJob;
	new CronJob('00 */1 * * * *', function(){
		var now = getDayTime();
	  Schedule.find(function (err, schedules) {
	    if(err) { throw err; }
	    console.log("Schedules: ", schedules);
	  });
	}, null, true, "America/Los_Angeles");
};


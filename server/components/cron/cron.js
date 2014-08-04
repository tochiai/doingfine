var cron = require('cron');
var Schedule = require('../../api/schedule/schedule.model');
var twilio = require('./../df.twilio/df.twilio.js');
var moment = require('moment');
var _ = require('lodash');
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
};

// send checkin updates to all schedule subscribers 
var sendCheckins = function(schedules) {
	var message = ' wants to know you are OK. Please check in by replying with any text message.';
	_.forEach(schedules, function(schedule) {
		twilio.sendText(schedule.publisherPhone, schedule.subscriberName + message);
	});
};

module.exports.start = function() {
	var CronJob = cron.CronJob;
	new CronJob('00 */1 * * * *', function(){
		var now = getDayTime();
		// find all schedules with current day and time
		var query = {
			times: { $in: [now.time]},
			days: { $in: [now.day] }
		};
	  Schedule.find(query, function (err, schedules) {
	    if(err) { throw err; };
	    console.log('Schedules: ', schedules);
	    sendCheckins(schedules);
	  });
	}, null, true, 'America/Los_Angeles');
};


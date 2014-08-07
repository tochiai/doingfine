/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Schedule = require('../api/schedule/schedule.model')

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    phone: '+15555551221'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function(err, testUser) {
      seedSchedules(testUser)
      console.log('finished populating users');
    }
  );
});

var seedSchedules = function(user){
  Schedule.find({}).remove(function() {
    Schedule.create({
      days: [0,1,2,3,5,7],
      times: ['16:35'],
      publisherCheckin: 'SMS',
      publisherPhone: '+12223334444',
      publisherName: 'Test Publisher',
      subscriberPhone: user.phone,
      subscriberName: user.name,
      subscriberID: user._id
    }, function() {
        console.log('finished populating test schedules');
      }
    );
  });
};

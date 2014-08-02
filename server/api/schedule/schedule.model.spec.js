'use strict';

var should = require('should');
var app = require('../../app');
var Schedule = require('./schedule.model');

var schedule = new Schedule({
  days: [1, 2, 3],
  times: ['06:20'],
  active: true,
  phone: 5555555555
});

describe('Schedule Model', function() {
  before(function(done) {
    // Clear schedules before testing
    Schedule.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Schedule.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no schedules', function(done) {
    Schedule.find({}, function(err, schedules) {
      schedules.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate schedule', function(done) {
    schedule.save(function() {
      var scheduleDup = new Schedule(schedule);
      scheduleDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an days', function(done) {
    schedule.days = [];
    schedule.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without a phone', function(done) {
    schedule.phone = 5555555555;
    schedule.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without a times', function(done) {
    schedule.times = [];
    schedule.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without an active', function(done) {
    schedule.active = true;
    schedule.save(function(err) {
      should.exist(err);
      done();
    });
  });

  // TODO: Authenticate phone number
});

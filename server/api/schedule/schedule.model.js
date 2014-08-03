'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  days: [Number],
  times: [String],
  active: Boolean,
  phone: String
});

ScheduleSchema.path('days')
  .validate(function(days){
    return days.length
  }, 'One day a week must be selected');

ScheduleSchema.path('times')
  .validate(function(times){
    return times.length
  }, 'One time must be selected');

ScheduleSchema.path('phone')
  .validate(function(phone){
    return phone.length === 12
  }, 'Phone number should have 12 digits');

ScheduleSchema.path('phone')
  .validate(function(phone){
    return phone[0] === '+'
  }, 'Phone number should start with +');

ScheduleSchema.path('phone')
  .validate(function(phone){
    return phone[1] === '1'
  }, 'First number in phone number should be 1');

module.exports = mongoose.model('Schedule', ScheduleSchema);

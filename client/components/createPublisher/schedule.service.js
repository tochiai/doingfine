'use strict';

angular.module('doingFineApp')
  .factory('Schedule', function ($http, $rootScope) {
    var schedule = {};
    var submit = function(schedule){
      //submit post request to server
      $http.post('/api/schedules', schedule)
        .success(function(data) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Successfully posted schedule', data);
        })
        .error(function(data) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Error', data);
        });
    };
    var update = function(schedule) {
      console.log(schedule.times);
      //format time into 24:00 format
      var hours = schedule.times.getHours();
      var minutes = (schedule.times.getMinutes() < 10 ? '0' : '') + schedule.times.getMinutes();
      schedule.times = [ hours + ':' + minutes];
      console.log(schedule.times);

      //submit post request to server
      return $http.put('/api/schedules/' + schedule._id, schedule)
        .success(function(data) {
          // this callback will be called asynchronously
          // when the response is available

          console.log('Successfully updated schedule', data);

          //wipe rootscope variable so page redirect works correctly
          $rootScope.editSchedule = null;
        })
        .error(function(data) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Error', data);
        });
    };

    return {
      schedule: schedule,
      submit: submit,
      update: update
    };
  });

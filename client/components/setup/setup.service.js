'use strict';

angular.module('doingFineApp')
  .factory('Setup', function ($http) {
    var schedule = {};
    var submit = function(schedule){
      //submit post request to server
      $http.post('/api/schedules', schedule)
        .success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Successfully posted schedule', data);
        })
        .error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Error');
        });
    };
    return {
      schedule: schedule,
      submit: submit
    };
  });

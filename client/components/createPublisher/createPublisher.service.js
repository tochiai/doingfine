'use strict';

angular.module('doingFineApp')
  .factory('CreatePublisher', function ($http) {
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
    return {
      schedule: schedule,
      submit: submit
    };
  });

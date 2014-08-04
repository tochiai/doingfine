'use strict';

angular.module('doingFineApp')
  .factory('Setup', function () {
    var schedule = {};
    var submit = function(){
      //submit post request to server
    };
    return {
      schedule: schedule
    };
  });

'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Schedule', {
        url: '/Schedule',
        templateUrl: 'app/Schedule/Schedule.html',
        controller: 'ScheduleCtrl',
        authenticate: true
      });
  });

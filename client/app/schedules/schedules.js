'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schedules', {
        url: '/schedules',
        templateUrl: 'app/schedules/schedules.html',
        controller: 'SchedulesCtrl'
      });
  });
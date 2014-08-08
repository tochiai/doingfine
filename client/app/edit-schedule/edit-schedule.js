'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-schedule', {
        url: '/edit-schedule',
        templateUrl: 'app/edit-schedule/edit-schedule.html',
        controller: 'EditScheduleCtrl'
      });
  });

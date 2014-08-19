'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schedule-edit', {
        url: '/schedule-edit',
        templateUrl: 'app/schedule-edit/schedule-edit.html',
        controller: 'ScheduleEditCtrl'
      });
  });

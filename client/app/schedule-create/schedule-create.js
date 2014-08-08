'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schedule-create', {
        url: '/schedule-create',
        templateUrl: 'app/schedule-create/schedule-create.html',
        controller: 'ScheduleCreateCtrl',
        authenticate: true
      });
  });

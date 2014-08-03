'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('setup', {
        url: '/setup',
        templateUrl: 'app/setup/setup.html',
        controller: 'SetupCtrl',
        authenticate: true
      });
  });

'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('publisher-create', {
        url: '/publisher-create',
        templateUrl: 'app/publisher-create/publisher-create.html',
        controller: 'PublisherCreateCtrl',
        authenticate: true
      });
  });

'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createPublisher', {
        url: '/createPublisher',
        templateUrl: 'app/createPublisher/createPublisher.html',
        controller: 'CreatePublisherCtrl',
        authenticate: true
      });
  });

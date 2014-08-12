'use strict';

angular.module('doingFineApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('followers', {
        url: '/followers',
        templateUrl: 'app/followers/followers.html',
        controller: 'FollowersCtrl'
      });
  });
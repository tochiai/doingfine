'use strict';

angular.module('doingFineApp')
  .controller('FollowersCtrl', function ($scope) {
    //Used to circumvent 'followers' screen and go straight to confirmation
    //TODO: once "followers" functionality is implemented, remove this line
    $scope.submitted = true;

    $scope.submit = function(){
      $scope.submitted = true;
    };
  });

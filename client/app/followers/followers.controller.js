'use strict';

angular.module('doingFineApp')
  .controller('FollowersCtrl', function ($scope) {
    $scope.submit = function(){
      $scope.submitted = true;
    };
  });

'use strict';

angular.module('doingFineApp')
  .controller('FollowersCtrl', function ($scope, $state) {
    $scope.submit = function(followers){
      $scope.submitted = true;
    };
  });

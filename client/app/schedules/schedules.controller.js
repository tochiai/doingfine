'use strict';

angular.module('doingFineApp')
  .controller('SchedulesCtrl', function ($scope, $http, User) {
    User.get(function(result){
      $scope.userID = result._id;
      $http.get('api/users/' + $scope.userID + '/schedules')
        .success(function(data){
          console.log('returned ', data);
          $scope.mySchedules = data;
        });
    });
  });

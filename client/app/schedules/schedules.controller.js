'use strict';

angular.module('doingFineApp')
  .controller('SchedulesCtrl', function ($scope, $state, $http, User) {

    $scope.formatDay = function(day) {
      var daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return daysShort[day];
    };

    $scope.edit = function(schedule){
      console.log(schedule);
      $state.go('edit-schedule', {schedule: 'test'});
    };

    User.get(function(result){
      $scope.userID = result._id;
      $http.get('api/users/' + $scope.userID + '/schedules')
        .success(function(data){
          $scope.mySchedules = data;
        });
    });
  });

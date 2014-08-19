'use strict';

angular.module('doingFineApp')
  .controller('SchedulesCtrl', function ($scope, $rootScope, $state, $http, User, Schedule) {

    $scope.formatDay = function(day) {
      //var daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return daysShort[day];
    };

    $scope.edit = function(schedule){
      $rootScope.editSchedule = schedule;
      $state.go('schedule-edit');
    };

    $scope.destroy = function(schedule) {
      Schedule.destroy(schedule).then(function() {
        getSchedules();
      });
    };

    var getSchedules = function() {
      User.get(function(result){
        $scope.userID = result._id;
        $http.get('api/users/' + $scope.userID + '/schedules')
          .success(function(data){
            $scope.mySchedules = data;
          });
      });
    };
    getSchedules();

  });

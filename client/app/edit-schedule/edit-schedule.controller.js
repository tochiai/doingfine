'use strict';

angular.module('doingFineApp')
  .controller('EditScheduleCtrl', function ($scope, $rootScope, $state, Schedule) {

    if (!$rootScope.editSchedule) {
      $state.go('schedules');
    }

    else {

      $scope.schedule = $rootScope.editSchedule;

      //PHONE FORMATTING
      $scope.schedule.publisherPhone = $scope.schedule.publisherPhone.slice(2);


      //DAY PICKER

      $scope.days = [
        {name: 'Monday', value: 1},
        {name: 'Tuesday', value: 2},
        {name: 'Wednesday', value: 3},
        {name: 'Thursday', value: 4},
        {name: 'Friday', value: 5},
        {name: 'Saturday', value: 6},
        {name: 'Sunday', value: 0}
      ];

      // toggle selection for a given day by name
      $scope.toggleDay = function toggleDays(day) {
        var idx = $scope.schedule.days.indexOf(day.value);

        // is currently selected
        if (idx > -1) {
          $scope.schedule.days.splice(idx, 1);
        }

        // is newly selected
        else {
          $scope.schedule.days.push(day.value);
        }
      };

      //submit form
      $scope.submit = function(form) {
        if (form.$valid) {
          //create variable to hold schedule in the format that API expects
          var submissionSchedule = _.clone($scope.schedule);

          //sort days array
          submissionSchedule.days.sort();


          //format telephone into +12223334444
          submissionSchedule.publisherPhone = '+1' + submissionSchedule.publisherPhone;

          //Submit AJAX put request to update schedule
          Schedule.update(submissionSchedule)
          .then(function(){
            $state.go('schedules');
          });
        }
      };


      //TIME PICKER

      var time = $scope.schedule.times[0].split(':');
      var hours = parseInt(time[0]);
      var minutes = parseInt(time[1]);

      $scope.schedule.times = new Date();
      $scope.schedule.times.setHours(hours); //cannot be prefixed with zero
      $scope.schedule.times.setMinutes(minutes);


      $scope.hstep = 1;
      $scope.mstep = 1;

      $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      };

      $scope.ismeridian = true;
      $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
      };

      $scope.update = function() {
        var d = new Date();
        d.setHours( 14 );
        d.setMinutes( 0 );
        $scope.schedule.times = d;
      };

      $scope.clear = function() {
        $scope.schedule.times = null;
      };

    }
  });

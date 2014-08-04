'use strict';

angular.module('doingFineApp')
  .controller('ScheduleCtrl', function ($scope, Setup) {
    //verify that data from '/setup' state persists through Setup factory
    console.log(Setup.schedule);

    $scope.schedule = Setup.schedule;

    //TIME PICKER

    $scope.schedule.times = new Date();

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

    $scope.changed = function () {
      console.log('Time changed to: ' + $scope.schedule.times);
    };

    $scope.clear = function() {
      $scope.schedule.times = null;
    };

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

    $scope.schedule.days = [];

    // toggle selection for a given day by name
    $scope.toggleDay = function toggleDays(day) {
      var idx = $scope.schedule.days.indexOf(day);

      // is currently selected
      if (idx > -1) {
        $scope.schedule.days.splice(idx, 1);
      }

      // is newly selected
      else {
        $scope.schedule.days.push(day.value);
      }
    };

    //FORM SUBMISSIONS

    //boolean used to toggle schedule setup and confirmation screens
    $scope.submitted = false;

    $scope.submit = function(form){
      if(form.$valid){
        $scope.submitted = true;
        // Setup.schedule.
        Setup.schedule.times = [$scope.schedule.times.getHours() + ":" + $scope.schedule.times.getMinutes()];
        console.log($scope.schedule);
        //Do AJAX request that sends object in the following format (coming from schedule Schema):
        //{
        //   days: [Number],
        //   times: [String],
        //   publisherPhone: String,
        //   publisherName: String,
        //   subscriberPhone: String,
        //   subscriberName: String
        // }

        // console.log(Setup.schedule);


      }
    };

  });

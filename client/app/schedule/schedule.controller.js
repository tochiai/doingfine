'use strict';

angular.module('doingFineApp')
  .controller('ScheduleCtrl', function ($scope, Setup) {
    //verify that data from '/setup' state persists through Setup factory
    console.log(Setup.publisher);

    $scope.publisher = Setup.publisher;


    //boolean used to toggle schedule setup and confirmation screens
    $scope.submitted = false;

    $scope.submit = function(form){
      if(form.$valid){
        $scope.submitted = true;
        Setup.publisher = $scope.publisher;
        Setup.publisher.time = $scope.publisher.time.getHours() + ":" + $scope.publisher.time.getMinutes();
        console.log(Setup.publisher);
        console.log($scope.publisher);
      }
    };

    $scope.publisher.time = new Date();

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
      $scope.publisher.time = d;
    };

    $scope.changed = function () {
      console.log('Time changed to: ' + $scope.publisher.time);
    };

    $scope.clear = function() {
      $scope.publisher.time = null;
    };
  });

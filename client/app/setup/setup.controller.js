'use strict';

angular.module('doingFineApp')
  .controller('SetupCtrl', function ($scope, $location, Setup) {
    //namespaced variable for models defined in template
    //will have schedule.name and schedule.phone
    $scope.schedule = {};

    $scope.submit = function(form){
      if(form.$valid) {
        //persist form data in Setup factory
        Setup.schedule.name = $scope.schedule.name;
        Setup.schedule.phone = $scope.schedule.phone;

        console.log('Name and Phone Submitted!');

        $location.path('/schedule');
      }
    };
  });

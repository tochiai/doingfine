'use strict';

angular.module('doingFineApp')
  .controller('SetupCtrl', function ($scope, $location, Setup, User) {
    //namespaced variable for models defined in template
    //will have schedule.name and schedule.phone
    $scope.schedule = {};
    User.get(function(result){
      $scope.schedule.subscriberName = result.name;
      $scope.schedule.subscriberPhone = result.phone;
      $scope.schedule.subscriberID = result._id;
    });

    $scope.submit = function(form){
      if(form.$valid) {
        //persist form data in Setup factory
        Setup.schedule = $scope.schedule;
        Setup.schedule.publisherPhone = '+1' + $scope.schedule.publisherPhone;

        console.log('Publisher Name and Phone Submitted!');

        $location.path('/schedule');
      }
    };
  });

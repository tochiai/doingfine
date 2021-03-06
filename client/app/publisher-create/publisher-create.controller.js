'use strict';

angular.module('doingFineApp')
  .controller('PublisherCreateCtrl', function ($scope, $state, Schedule, User) {
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
        //persist form data in Schedule factory
        Schedule.schedule = $scope.schedule;
        Schedule.schedule.publisherPhone = '+1' + $scope.schedule.publisherPhone;
        console.log('Publisher Name and Phone Submitted!');
        $state.go('schedule-create');
      }
    };
  });

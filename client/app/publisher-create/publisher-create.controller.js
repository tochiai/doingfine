'use strict';

angular.module('doingFineApp')
<<<<<<< HEAD:client/app/createPublisher/createPublisher.controller.js
  .controller('ScheduleCtrl', function ($scope, $location, Schedule, User) {
=======
  .controller('PublisherCreateCtrl', function ($scope, $location, Schedule, User) {
>>>>>>> 216417f6775ea19ce7f672cf3cf23038648bd30c:client/app/publisher-create/publisher-create.controller.js
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
        console.log(Schedule.schedule);
        console.log('Publisher Name and Phone Submitted!');

        $location.path('/schedule-create');
      }
    };
  });

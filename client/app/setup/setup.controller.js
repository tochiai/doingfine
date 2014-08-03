'use strict';

angular.module('doingFineApp')
  .controller('SetupCtrl', function ($scope, $location, Setup) {
    //namespaced variable for models defined in template
    //will have sender.name and sender.phone
    $scope.sender = {};

    $scope.submit = function(form){
      if(form.$valid) {
        //persist form data in Setup factory
        Setup.sender.name = $scope.sender.name;
        Setup.sender.phone = $scope.sender.phone;

        console.log('Name and Phone Submitted!');

        $location.path('/schedule');
      }
    };
  });

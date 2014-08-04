'use strict';

angular.module('doingFineApp')
  .controller('SetupCtrl', function ($scope, $location, Setup) {
    //namespaced variable for models defined in template
    //will have publisher.name and publisher.phone
    $scope.publisher = {};

    $scope.submit = function(form){
      if(form.$valid) {
        //persist form data in Setup factory
        Setup.publisher.name = $scope.publisher.name;
        Setup.publisher.phone = $scope.publisher.phone;

        console.log('Name and Phone Submitted!');

        $location.path('/schedule');
      }
    };
  });

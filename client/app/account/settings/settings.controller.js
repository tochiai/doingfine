'use strict';

angular.module('doingFineApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};

    var getUser = function() {
      User.get(function(result){
        $scope.userID = result._id;
        $scope.userName = result.name;
        $scope.phone = result.phone.slice(2);
        $scope.email = result.email;
        console.log(result);
        // $http.get('api/users/' + $scope.userID + '/schedules')
        //   .success(function(data){
        //     $scope.mySchedules = data;
        //   });
      });
    };
    getUser();
  });

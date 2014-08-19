'use strict';

angular.module('doingFineApp')
  .factory('User', function ($http, $resource) {

    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      accountUpdate: {
        method: 'PUT'
      }
	  });

  });

'use strict';

describe('Controller: FollowersCtrl', function () {

  // load the controller's module
  beforeEach(module('doingFineApp'));

  var FollowersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FollowersCtrl = $controller('FollowersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

describe('Controller: CreatePublisherCtrl', function () {

  // load the controller's module
  beforeEach(module('doingFineApp'));

  var CreatePublisherCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatePublisherCtrl = $controller('CreatePublisherCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

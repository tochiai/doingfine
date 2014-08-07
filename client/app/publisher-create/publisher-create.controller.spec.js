'use strict';

describe('Controller: PublisherCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('doingFineApp'));

  var PublisherCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublisherCreateCtrl = $controller('PublisherCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

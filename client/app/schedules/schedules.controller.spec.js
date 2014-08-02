'use strict';

describe('Controller: SchedulesCtrl', function () {

  // load the controller's module
  beforeEach(module('doingFineApp'));

  var SchedulesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchedulesCtrl = $controller('SchedulesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

describe('Controller: ScheduleCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('doingFineApp'));

  var ScheduleCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleCreateCtrl = $controller('ScheduleCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

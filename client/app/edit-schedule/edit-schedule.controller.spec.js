'use strict';

describe('Controller: EditScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('doingFineApp'));

  var EditScheduleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditScheduleCtrl = $controller('EditScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

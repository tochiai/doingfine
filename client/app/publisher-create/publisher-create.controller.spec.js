'use strict';

<<<<<<< HEAD:client/app/createPublisher/createPublisher.controller.spec.js
describe('Controller: ScheduleCtrl', function () {
=======
describe('Controller: PublisherCreateCtrl', function () {
>>>>>>> 216417f6775ea19ce7f672cf3cf23038648bd30c:client/app/publisher-create/publisher-create.controller.spec.js

  // load the controller's module
  beforeEach(module('doingFineApp'));

<<<<<<< HEAD:client/app/createPublisher/createPublisher.controller.spec.js
  var ScheduleCtrl, scope;
=======
  var PublisherCreateCtrl, scope;
>>>>>>> 216417f6775ea19ce7f672cf3cf23038648bd30c:client/app/publisher-create/publisher-create.controller.spec.js

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
<<<<<<< HEAD:client/app/createPublisher/createPublisher.controller.spec.js
    ScheduleCtrl = $controller('ScheduleCtrl', {
=======
    PublisherCreateCtrl = $controller('PublisherCreateCtrl', {
>>>>>>> 216417f6775ea19ce7f672cf3cf23038648bd30c:client/app/publisher-create/publisher-create.controller.spec.js
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

describe('Controller: MainCtrl', function () {

  // KEPT FOR REFERENCE ON SETTING UP UNIT TESTS

  // // load the controller's module
  // beforeEach(module('doingFineApp'));
  // beforeEach(module('socketMock'));
  //
  // var MainCtrl,
  //     scope,
  //     $httpBackend;
  //
  // // Initialize the controller and a mock scope
  // beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
  //   $httpBackend = _$httpBackend_;
  //   $httpBackend.expectGET('/api/things')
  //     .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
  //
  //   scope = $rootScope.$new();
  //   MainCtrl = $controller('MainCtrl', {
  //     $scope: scope
  //   });
  // }));
  //
  // it('should attach a list of things to the scope', function () {
  //   $httpBackend.flush();
  //   expect('test').toBe('test');
  // });

  it('should have a dummy test', function() {
      expect('test').toBe('test');
  });
});

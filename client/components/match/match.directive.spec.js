'use strict';

describe('Directive: match', function () {

  // load the directive's module
  beforeEach(module('doingFineApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // TODO: Write tests
  it('should error when things dont match', inject(function ($compile) {
    element = angular.element('<p ng-model="thing"></p><p ng-model="matchingThing" match="thingToMatch">a</p>');
    element = $compile(element)(scope);
    expect(true).toBe(true);
  }));
});

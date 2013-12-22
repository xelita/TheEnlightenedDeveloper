'use strict';

describe('Controller: HelloworldcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularSampleApp'));

  var HelloworldcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloworldcontrollerCtrl = $controller('HelloworldcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

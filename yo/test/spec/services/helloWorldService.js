'use strict';

describe('Service: Helloworldservice', function () {

  // load the service's module
  beforeEach(module('yoAngularSampleApp'));

  // instantiate service
  var Helloworldservice;
  beforeEach(inject(function (_Helloworldservice_) {
    Helloworldservice = _Helloworldservice_;
  }));

  it('should do something', function () {
    expect(!!Helloworldservice).toBe(true);
  });

});

'use strict';

angular.module('yoAngularSampleApp')
  .factory('helloWorldService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      hello: function () {
        return 'Hello World!';
      }
    };
  });

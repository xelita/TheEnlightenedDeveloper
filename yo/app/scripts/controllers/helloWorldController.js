'use strict';

angular.module('yoAngularSampleApp')
  .controller('HelloworldcontrollerCtrl', function ($scope, helloWorldService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.about = function(){
    	alert(helloWorldService.hello());
    };
  });

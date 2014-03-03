'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

  angular.module('myApp.controllers', ['asdf']).
    controller('MyCtrl1', ['testService', function(testService) {
      alert(testService.sayHello("World"));
  	}]).
    controller('MyCtrl2', [function() {
    	
	}]);
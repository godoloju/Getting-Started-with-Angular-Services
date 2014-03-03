'use strict';

/* Controllers */

angular.module('myApp.controllers', ['asdf']).
	controller('MyCtrl1', ['testService', function(testService) {
		alert(testService.sayHello("World"));
	}]).
	controller('MyCtrl2', [function() {

}]);
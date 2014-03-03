'use strict';

/* Controllers */

angular.module('myApp.controllers', ['asdf']).
	controller('MyCtrl1', ['testService', function(testService) {
		var helloWorld = new testService('Not World');
		console.dir(helloWorld.sayHello());
	}]).
	controller('MyCtrl2', [function() {

	}]);
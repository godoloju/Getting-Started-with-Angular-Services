'use strict';

/* Controllers */

angular.module('myApp.controllers', ['asdf']).
	controller('MyCtrl1', ['testService', function(testService) {
		console.dir(testService);
	}]).
	controller('MyCtrl2', [function() {

	}]);
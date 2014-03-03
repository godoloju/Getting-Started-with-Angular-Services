'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

//Services Module
var app = angular.module('asdf', []);
// Service definition
app.factory('testService', function(){
    return {
    	sayHello : function(text){
        	return "Factory Object says \"Hello " + text + "\"";
    	}
    };
});

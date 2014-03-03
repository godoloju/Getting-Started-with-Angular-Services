'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

//Services Module
var app = angular.module('asdf', []);
// Service definition
app.provider('testService', function () {

  var HelloWorldClass = function(t){
  	this.text = t;
    this.sayHello = function () {
      return "Provider Service Object says \"Hello " + this.text + "\"";
    }
  }

  this.$get = function() {
    return HelloWorldClass;
  };
});

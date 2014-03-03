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
  //var text = "Not World";
  //this.setText = function(t){
  //  text = t;
  //}

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

//app.config(function(testService){
//  testService.setText("Configure World");
//});
//------------------
//var helloWorld = new testService('Not World');
//helloWorld.sayHello();
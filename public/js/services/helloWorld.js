/*global angular:false */
'use strict';

angular.module('myApp.services').factory("HelloWorld", ['$resource', function($resource) {
	return $resource('/helloWorld');
}]);
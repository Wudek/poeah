/*global angular:false */
'use strict';


angular.module('myApp.controllers', [])
	.controller('AppCtrl', ['$scope', function($scope)
	{
//		$scope.helloWorld = "hello world!";
		$scope.test = function()
		{

		};
	}])
	.controller('HomeCtrl', ['$scope', function($scope) {
		$scope.test2 = function()
		{
			console.log("hello world2");
		};

	}])
	.controller('LoginCtrl', [function() {

	}])
	.controller('ItemsCtrl', [function() {

	}]);
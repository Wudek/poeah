/*global angular:false */
'use strict';
angular.module('myApp.controllers').controller('AppCtrl', ['$scope', 'Global', 'HelloWorld',
	function ($scope, Global, HelloWorld)
{
	$scope.global = Global;

	$scope.test = function()
	{
		console.log("hello world");
		HelloWorld.get();
	};
}]);
'use strict';

/* Controllers */

var vilayaduControllers = angular.module('vilayaduControllers', []);

vilayaduControllers.controller('HomeCtrl', ['$scope', 
  function($scope) {
	
	//Show Home Page
	$scope.showHome = function () {
		$scope.name = "John";    
	}; 
	
	//Show Home
	$scope.showHome();
  }]
);


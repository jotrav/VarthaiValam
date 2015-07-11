'use strict';
/* App Module */
var vilayaduApp = angular.module('vilayaduApp', ['ngRoute', 'ngSanitize', 'ngTouch', 'pascalprecht.translate',  'vilayaduControllers', 'underscore']);

vilayaduApp.config(['$routeProvider', 
		function ($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl'
			}).
			when('/tip', {
				templateUrl : 'partials/home.html',
				//controller : 'CategoryTipCtrl'
			}).
			otherwise({
				redirectTo : '/home'
			});
		}
	]);
	
vilayaduApp.config(function ($translateProvider) {
        $translateProvider.translations('en', {
          TITLE: 'Telugu Tips',
          HOME: 'Home',
		  HEALTH_TIPS: 'Health Tips',
		  BEAUTY_TIPS: 'Beauty Tips',
		  KURAL: 'Kural',
          BUTTON_LANG_EN: 'english',
          BUTTON_LANG_DE: 'german',
          TIP:'Tip'
        });
        $translateProvider.translations('te', {
          TITLE: 'Telugu Tips',
          HOME: '\u0c39\u0c4b\u0c2e\u0c4d',
		  HEALTH_TIPS: '\u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c1a\u0c3f\u0c1f\u0c4d\u0c15\u0c3e\u0c32\u0c41',
		  COOKING_TIPS: '\u0c35\u0c02\u0c1f\u0c3f\u0c02\u0c1f\u0c3f \u0c1a\u0c3f\u0c1f\u0c4d\u0c15\u0c3e\u0c32\u0c41', 
		  BEAUTY_TIPS: '\u0c05\u0c02\u0c26\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c1a\u0c3f\u0c1f\u0c4d\u0c15\u0c3e\u0c32\u0c41',
		  HOME_TIPS: '\u0c07\u0c02\u0c1f\u0c3f \u0c2e\u0c46\u0c30\u0c41\u0c17\u0c41\u0c26\u0c32\u0c15\u0c41 \u0c1a\u0c3f\u0c1f\u0c4d\u0c15\u0c3e\u0c32\u0c41',
		  HOME_REMEDIES: '\u0c07\u0c02\u0c1f\u0c4d\u0c32\u0c4b \u0c09\u0c02\u0c21\u0c47 \u0c14\u0c37\u0c26\u0c3e\u0c32\u0c41',
          BUTTON_LANG_EN: 'englisch',
          BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('te');
      });

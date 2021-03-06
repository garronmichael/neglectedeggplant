'use strict';

/**
 * @ngdoc overview
 * @name testangularApp
 * @description
 * # testangularApp
 *
 * Main module of the application.
 */
angular
  .module('wayfareApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    // ui.bootstrap is a dependency necessary for the Angular-specific Bootstrap code that I have in the front-end.
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/location', {
        templateUrl: 'app/views/location.html',
        controller: 'MainCtrl'
      })
      .when('/budget', {
        templateUrl: 'app/views/budget.html',
        controller: 'MainCtrl'
      })
      .when('/finished', {
        templateUrl: 'app/views/finished.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

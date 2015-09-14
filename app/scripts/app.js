'use strict';

/**
 * @ngdoc overview
 * @name streamCreaseAngularTestApp
 * @description
 * # streamCreaseAngularTestApp
 *
 * Main module of the application.
 */
angular
  .module('streamCreaseAngularTestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

// Declare app level module which depends on views, and components
  angular.module('mySimon', [
    'ngRoute',
    'mySimon',
  ]).
    config(['$routeProvider', function($routeProvider){
      $routeProvider.otherwise({redirectTo: '/game'});
  }]);

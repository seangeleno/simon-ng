'use strict';

angular.module('mySimon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'game/game.html',
    controller: 'GameCtrl'
  });
}])

.controller('GameCtrl', ['$scope', function($scope) {

  // $scope.clickButton() = function () {
  //   $scope.clickButton = true;
  // }

}]);

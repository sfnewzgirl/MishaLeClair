// sanity check
console.log('app.js linked');

var portfolio = angular.module('portfolio', [$ngRoute]);

portfolio.config(function() {

});

portfolio.controller('ProjectsController', ['$scope', function($scope) {

  $scope.class = "inactive";

  $scope.changeClass = function () {
    if($scope.class === "active")
      $scope.class = "inactive";
    else
      $scope.class = "active";
  };

}]);

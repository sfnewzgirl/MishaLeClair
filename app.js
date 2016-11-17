// sanity check
console.log('app.js linked');

var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/about-me.html'
    })
    .when('/contact-me', {
      templateUrl: 'views/contact-me.html'
    })
    .when('/sitterswap', {
      templateUrl: 'views/sitterswap.html'
    })
    .when('/within-reach', {
      templateUrl: 'views/within-reach.html'
    })
    .when('/protips', {
      templateUrl: 'views/protips.html'
    })
    .when('/race-time', {
      templateUrl: 'views/race-time.html'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

// portfolio.controller('ProjectsController', ['$scope', function($scope) {

  // $scope.class = "inactive";
  //
  // $scope.changeClass = function () {
  //   if($scope.class === "active")
  //     $scope.class = "inactive";
  //   else
  //     $scope.class = "active";
  // };

// }]);

// sanity check
console.log('app.js linked');

var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateurl: 'views/about-me.html'
    })
    .when('/contact-me', {
      templateurl: 'views/contact-me.html'
    })
    .when('/sitterswap', {
      templateurl: 'views/sitterswap.html'
    })
    .when('/within-reach', {
      templateurl: 'views/within-reach.html'
    })
    .when('/protips', {
      templateurl: 'views/protips.html'
    })
    .when('/race-time', {
      templateurl: 'views/race-time.html'
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

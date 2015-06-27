var angular_demo = angular.module('app', ['ngRoute','app.home'])

// Page routing
angular_demo.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    .when('/home', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/'
    });
});


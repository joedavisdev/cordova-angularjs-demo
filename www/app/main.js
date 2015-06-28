var angular_demo = angular.module('app', ['ngRoute','app.home','app.another_page'])

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
    .when('/another_page', {
        templateUrl: 'components/another_page/another_page.html',
        controller: 'AnotherController'
    })
    .otherwise({
        redirectTo: '/'
    });
});


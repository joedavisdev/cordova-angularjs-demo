angular.module('app.home', [])
    .controller("HomeController", ['$scope', '$location', HomeController]);

function HomeController($scope, $location) {
    $scope.heading = "cordova-angularjs-demo home screen"
}

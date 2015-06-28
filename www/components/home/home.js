angular.module('app.home', [])
    .controller("HomeController", ['$scope', '$location', HomeController]);

function HomeController($scope, $location) {
    // Angular functions
    $scope.go = function(path) {
        $location.path(path);
    };

    /* init() - Immediate function to setup variables
    *  Personal preference. Improves code clarity as
    *  completixy increases
    * */
    self.init = (function() {
        // Scope setup
        $scope.heading = "home screen"
    })();
}

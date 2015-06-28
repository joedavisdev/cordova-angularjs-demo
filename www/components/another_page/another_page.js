angular.module('app.another_page', [])
    .controller("AnotherController", ['$scope', '$location', AnotherController]);

function AnotherController($scope, $location) {
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
        $scope.heading = "another page"
    })();
}


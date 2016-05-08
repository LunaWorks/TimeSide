/**
 * Welcome controller
 */
(function(angular) {
    var core = angular.module('TimeSide_Core');

    core.controller('WelcomeCtrl', ['$scope', function($scope) {
        $scope.mesage = "Welcome!";
        this.message = "Hey Dude!";
    }]);
})(angular);

/**
 * Welcome controller
 */
(function(angular) {
    var core = angular.module('TimeSide_Core');

    core.controller('WelcomeCtrl', [function() {
        this.message = 'Hey Dude!';
    }]);
})(angular);

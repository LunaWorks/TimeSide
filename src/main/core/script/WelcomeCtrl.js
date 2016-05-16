/**
 * Welcome controller
 */
(function(angular) {
    var core = angular.module('App');

    core.controller('WelcomeCtrl', [function() {
        this.message = 'Hey Dude!';
    }]);
})(angular);

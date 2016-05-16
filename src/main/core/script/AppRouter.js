'use strict';

/**
 * Core module's initializer
 */
(function(angular) {
    var core = angular.module('App');

    core.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'view/welcome.html',
                controller: 'WelcomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        }]);
})(angular);
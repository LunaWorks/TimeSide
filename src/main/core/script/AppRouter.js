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
            when('/report', {
                templateUrl: 'view/report.html',
                controller: 'ReportCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        }]);
})(angular);
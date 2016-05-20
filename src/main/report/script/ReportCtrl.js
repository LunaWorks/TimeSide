/**
 * Created by Marci on 2016.05.16..
 */

(function(angular) {
    var report = angular.module('timeside-report');

    report.controller('ReportCtrl', function() {
        console.info('ReportCtrl');

        var options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        var start = new Date();
        start.setHours(8, 0);
        var end = new Date();
        end.setHours(start.getHours() + 8);
        end.setMinutes(start.getMinutes() + 0);
        this.day = {
            need: 8,
            start: start.toLocaleTimeString('hu-HU', options),
            break: 0,
            expected: end.toLocaleTimeString('hu-HU', options),
            end: undefined
        };
        //console.log('Start: ' + start.toLocaleFormat('HH:mm'));
    });
})(angular);

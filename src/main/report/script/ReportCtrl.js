/**
 * Created by Marci on 2016.05.16..
 */

(function(angular) {
    var report = angular.module('timeside-report');

    report.controller('ReportCtrl', function() {
        var dailyWorkHours = 8;

        var options = {
             hour: '2-digit', minute: '2-digit'
        };
        var start = new Date();
        //start.setHours(8, 0);
        var expected = null;
        var breakTime = 0;
        var end = null;
        //end.setHours(start.getHours() + 8);
        //end.setMinutes(start.getMinutes() + 0);
        this.day = {
            need: dailyWorkHours,
            start: null,
            break: breakTime,
            expected: null,
            end: undefined
        };

        this.refreshDay = function () {
            calculateExpectedLeave(start, breakTime);
            this.day = {
                need: dailyWorkHours,
                start: start.toLocaleTimeString('hu-HU', options),
                break: breakTime,
                expected: expected.toLocaleTimeString('hu-HU', options),
                end: undefined
            };
        };
        this.setStart = function(time) {
            start = time;
            this.refreshDay();
        };

        this.setBreak = function(minutes) {
            breakTime = minutes;
            this.refreshDay();
        };

        this.setEnd = function(time) {
            end = time;
            return calculateWorkingHours(start, breakTime, end);
        };

        function calculateExpectedLeave(time, breakTime) {
            expected = new Date (time.getMilliseconds());
            expected.setHours(time.getHours() + dailyWorkHours);
            expected.setMinutes(time.getMinutes() + breakTime);
        }

        function calculateWorkingHours(start, breakTime, end) {
            return (end - start) / (60 * 1000)  - breakTime;
        }

        //this.setStart(new Date());
        //this.setBreak(35);

    });
})(angular);

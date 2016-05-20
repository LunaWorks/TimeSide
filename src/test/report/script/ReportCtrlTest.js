describe('ReportCtrl', function () {
    beforeEach(module('timeside-report'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('should declare this.day property', function () {
        var underTest = $controller('ReportCtrl');
        expect(underTest.day).toBeDefined();
    });

    it('should declare this.refreshDay property', function () {
        var underTest = $controller('ReportCtrl');
        expect(underTest.refreshDay).toBeDefined();
    });

    it('should declare this.setStart property', function () {
        var underTest = $controller('ReportCtrl');
        expect(underTest.setStart).toBeDefined();
    });

    it('should declare this.setBreak property', function () {
        var underTest = $controller('ReportCtrl');
        expect(underTest.setStart).toBeDefined();
    });

    it('should set start time', function () {
        // GIVEN
        var underTest = $controller('ReportCtrl');

        // WHEN
        underTest.setStart(new Date(0));

        // THEN
        expect(underTest.day.start).toEqual('1:00:00 CET');
    });

    it('should set expected leave time when setting start time', function () {
        // GIVEN
        var underTest = $controller('ReportCtrl');

        // WHEN
        underTest.setStart(new Date(0));

        // THEN
        expect(underTest.day.expected).toEqual('9:00:00 CET');
    });

    it('should set break length when setting break time', function () {
        // GIVEN
        var underTest = $controller('ReportCtrl');

        // WHEN
        underTest.setBreak(30);

        // THEN
        expect(underTest.day.break).toEqual(30);
    });

    it('should set expected leave time when setting break time', function () {
        // GIVEN
        var underTest = $controller('ReportCtrl');

        // WHEN
        underTest.setStart(new Date(0));
        underTest.setBreak(30);

        // THEN
        expect(underTest.day.expected).toEqual('9:30:00 CET');
    });

    it('should return work time in minutes when setting end time', function () {
        // GIVEN
        var underTest = $controller('ReportCtrl');

        // WHEN
        underTest.setStart(new Date(0));
        var work = underTest.setEnd(new Date(3600000));

        // THEN
        expect(work).toEqual(60);
    });

    it('should return work time in minutes when setting end time and break time is set too', function () {
        // GIVEN
        var underTest = $controller('ReportCtrl');

        // WHEN
        underTest.setStart(new Date(0));
        underTest.setBreak(30);
        var work = underTest.setEnd(new Date(3600000));

        // THEN
        expect(work).toEqual(30);
    });
});
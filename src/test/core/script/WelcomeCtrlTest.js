describe('WelcomeCtrl', function () {
    beforeEach(module('App'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('should declare this.message property', function () {
        var underTest = $controller('WelcomeCtrl');
        expect(underTest.message).toBeDefined();
    });
});

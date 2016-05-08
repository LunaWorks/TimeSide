describe('WelcomeCtrl', function () {
    beforeEach(module('TimeSide_Core'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

   it('should declare message property', function () {
       var $scope = {};
       var underTest = $controller('WelcomeCtrl', { $scope: $scope });
       expect(underTest.message).toBeDefined();
   });
});
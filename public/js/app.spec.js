describe("MainController", function() {
    var $scope;
    var controller;

    beforeEach(function() {
        module("app");
        inject(function(_$rootScope_, $controller) {
            $scope = _$rootScope_.$new();
            controller = $controller("MainController", {$scope: $scope});
        });
    });

    it("Should create results model with 3 items", function() {
        expect($scope.results.length).toBe(3);
    });
    it("Should create saved model with 1 item", function() {
        expect($scope.saved.length).toBe(1);
    });
});

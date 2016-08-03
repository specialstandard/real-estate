describe("MainController", function() {
    var $scope;
    var controller;
    var thisProperty = {
           "price": "$726,500",
           "agency": {
               "brandingColors": {
                   "primary": "#ffe512"
               },
               "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
           },
           "id": "1",
           "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
       }

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
    it("Clicking add should add 1 to saved", function() {
        $scope.onClickAddProperty( thisProperty )
        expect($scope.saved.length).toBe(2);
    });
    it("Clicking remove should remove 1 from saved", function() {
        $scope.onClickAddProperty( thisProperty )
        expect($scope.saved.length).toBe(2);
        $scope.onClickRemoveProperty( thisProperty )
        expect($scope.saved.length).toBe(1);
    });
});

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
    var initialSavedProperty = {
         "price": "$526,500",
         "agency": {
             "brandingColors": {
                 "primary": "#000000"
             },
             "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
         },
         "id": "4",
         "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
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
        expect($scope.saved.length).toBe(1);
        $scope.onClickAddProperty( thisProperty )
        expect($scope.saved.length).toBe(2);
        expect($scope.saved[1]).toEqual( thisProperty );
    });
    it("Clicking remove should remove 1 from saved", function() {
        expect($scope.saved.length).toBe(1);
        expect($scope.saved[0]).toEqual( initialSavedProperty );
        $scope.onClickAddProperty( thisProperty )
        expect($scope.saved.length).toBe(2);
        $scope.onClickRemoveProperty( thisProperty )
        expect($scope.saved.length).toBe(1);
        expect($scope.saved[0]).toEqual( initialSavedProperty );
    });
});

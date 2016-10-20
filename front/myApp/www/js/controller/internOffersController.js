angular.module('app.controllers')
.controller('InternOffersController', function($scope, $ionicModal, $http, $rootScope) {
    
    // ViewModel for filter modal
    $scope.filterViewModel = {
        label: "",
        location: "",
        referent: {
            name: ""
        },
    };
    
    // Load offer list
    $http({
        method: 'GET',
        url: $rootScope.serverURL + '/internoffer',
        headers: {'Content-Type': 'application/json'}
    }).then(
        function(response){
            if(response.data !== null){
                $scope.offers = response.data;
            }
        }, 
        function(response){
            console.log("Error InternOffersController.GetOffers : " + response);
        }
    );
    
    // Create the filter modal
    $ionicModal.fromTemplateUrl('templates/filterOffer.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.filterOfferModal = modal;
    });
    
    // Open filter form
    $scope.filterOffer = function() {
        $scope.filterOfferModal.show();
    };
    
    // Close filter form
    $scope.doCloseFilterOffer = function() {
        $scope.filterOfferModal.hide();
    };
    
    // Filter offer list 
    $scope.doFilterOffer = function() {
        // Get offer list filtered
        $http({
            method: 'GET',
            url: $rootScope.serverURL + '/filterInternOffer/' + $scope.filterViewModel,
            headers: {'Content-Type': 'application/json'}
        }).then(
            function(response){
                if(response.data !== null){
                    $scope.offers = response.data;
                }
            }, 
            function(response){
                console.log("Error InternOffersController.GetOffers : " + response);
            }
        );
        // Hide filter modal
        $scope.filterOfferModal.hide();
    };
    
});
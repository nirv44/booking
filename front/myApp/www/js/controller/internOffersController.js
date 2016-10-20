angular.module('app.controllers')
.controller('InternOffersController', function($scope, $ionicModal, $http, $rootScope) {
    
    // ViewModel for filterModal
    $scope.filterViewModel = [
        {
            "label": "Développeur",
            "earning": "10K€",
            "description": "description test 1",
            "location": "Nulle part",
            "duration": "1 jour",
            "referent": {
                "name": "CGI",
                "logoLink": "http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png"
            },
            "currentApply": {
                "state": "1",
                "stateLabel": "valid"
            },
            "applies": {
                "state": "1",
                "stateLabel": "applied"
            }
        }   
    ];
    
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
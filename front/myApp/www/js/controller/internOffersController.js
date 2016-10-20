angular.module('app.controllers')
.controller('InternOffersController', function($scope, $ionicModal, $http, $rootScope) {
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
            url: $rootScope.serverURL + '/filterInternOffer/' + getFilterViewModel(),
            headers: {'Content-Type': 'application/json'}
        }).then(
            function(response){
                if(response.data !== null){
                    $scope.offers = response.data;
                }
            }, 
            function(response){
                console.log("Error InternOffersController.FilterOffers : ", response);
            }
        );
        // Hide filter modal
        $scope.filterOfferModal.hide();
    };
    
    // Get appropriate viewModel for server
    getFilterViewModel = function() {
        var viewModel = {};
        if ($scope.filterViewModel.label !== "") {
            viewModel.label = $scope.filterViewModel.label;
        }
        if ($scope.filterViewModel.location !== "") {
            viewModel.location = $scope.filterViewModel.location;
        }
        if ($scope.filterViewModel.referent && $scope.filterViewModel.referent.name !== "") {
            viewModel.referent = {
                name: $scope.filterViewModel.referent.name
            }
        }
        return viewModel;
    };
    
    // Init viewModel for filtering offers
    initFilterViewModel = function() {
        $scope.filterViewModel = {
            label: "",
            location: "",
            referent: {
                name: ""
            },
        };
    };
    
    // Get all offers for current user
    getAllOffers = function() {
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
                console.log("Error InternOffersController.GetOffers : ", response);
            }
        );  
    };
    
    // Remove current filter
    $scope.deleteFilter = function() {
        initFilterViewModel();
        getAllOffers();
    };
    
    // Load offer list
    initFilterViewModel();
    getAllOffers();
});
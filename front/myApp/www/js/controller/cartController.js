angular.module('app.controllers')
.controller('CartController', function($scope, $rootScope, $ionicModal, $filter) {
    // Get current user offers in cart
    $scope.offers = $rootScope.cartOffers;
    
    // Apply form viewModel
    $scope.applyFormViewModel = {};
    
    // Create the apply modal
    $ionicModal.fromTemplateUrl('templates/applyForm.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.applyForm = modal;
    });
    
    // Open apply form
    $scope.apply = function() {
        $scope.applyForm.show();
    };
    
    // Launch user appliance to current 
    $scope.doApply = function() {
        console.log("Apply form : ", $scope.applyFormViewModel);
        $scope.applyForm.hide();
    };
    
    // Remove offer from user's cart
    $scope.removeOffer = function(id) {
        $rootScope.cartOffers = $filter("filter")($rootScope.cartOffers, { id:id });
        var offerIndex = $rootScope.cartOffers.indexOf(offerToRemove);
        $rootScope.cartOffers.splice(offerIndex, 1);  
        console.log(offerToRemove);  
    };
});
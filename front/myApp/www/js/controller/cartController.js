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
    $scope.apply = function(id) {
        $scope.applyForm.offerId = id;
        $scope.applyForm.show();
    };
    
    // Close apply form 
    $scope.doCloseApplyForm = function() {
        $scope.applyForm.hide();
    };
    
    // Launch user appliance to current 
    $scope.doApply = function() {
        $http({
            method: 'POST',
            url: $rootScope.serverURL + '/apply',
            data: prepareApplianceToJson($scope.applyFormViewModel)
        }).then(
            function(response){
                if (response.status == 200) {
                    $scope.removeOffer($scope.applyForm.offerId);
                    $scope.applyForm.hide();
                }
            }, function(response){
                console.log("Error CartController.Apply : ", response);
            }
        );
    };
    
    prepareApplianceToJson = function(data){
        return JSON.stringify(data);
    };
    
    // Remove offer from user's cart
    $scope.removeOffer = function(id) {
        var offerToRemove = $filter("filter")($rootScope.cartOffers, { _id:id });
        var offerIndex = $rootScope.cartOffers.indexOf(offerToRemove);
        $rootScope.cartOffers.splice(offerIndex, 1);
    };
});
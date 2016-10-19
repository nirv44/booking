angular.module('app.controllers')
.controller('CartController', function($scope, $rootScope, $state) {
    // Get current user offers in cart
    $scope.offers = $rootScope.cartOffers;
    
    // Go to apply view
    $scope.apply = function() {
        $state.go('app.cart');
    };
});
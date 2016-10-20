angular.module('app.controllers')
.controller('InternOfferController', function($http, $scope, $stateParams, $rootScope) {    
    // Get detailed information of the internship offer
    $http({
        method: 'GET',
        url: $rootScope.serverURL + '/internoffer/' + $stateParams.offerId,
        headers: {'Content-Type': 'application/json'}
    }).then(
        function(response){
            if(response.data !== null){
                $scope.offer = response.data;
            }
        }, 
        function(response){
            console.log("Error InternOfferController.GetOffer : ", response);
        }
    );
    
    // Add current offer to user's cart
    $scope.addToCart = function () {
        $rootScope.cartOffers.push($scope.offer);
    };
});
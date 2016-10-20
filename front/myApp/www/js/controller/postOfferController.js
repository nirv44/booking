angular.module('app.controllers')
.controller('PostOfferController', function($scope, $rootScope, $http, $state) {
    prepareInternOfferToJson = function(data){
        return JSON.stringify(data);
    };
    
    // Declare viewModel for posting offers
    initViewModel = function() {
        $scope.newOfferViewModel = {
            referent: {
                name: $rootScope.user.name,
                logoLink: $rootScope.user.logoLink
            }
        };
    };
    
    // Send the new offer to server
    $scope.doPostOffer = function() {
        $http({
            method: 'POST',
            url: $rootScope.serverURL + '/internoffer',
            data: prepareInternOfferToJson($scope.newOfferViewModel)
        }).then(
            function(response){
                if (response.status == 200) {
                    initViewModel(); 
                }
            }, function(response){
                console.log(response);
            }
        );
    };
    
    // Init viewModel
    initViewModel();
});
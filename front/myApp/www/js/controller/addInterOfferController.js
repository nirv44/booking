angular.module('app.controllers')
.controller('addInterOfferController', function($scope, $rootScope, $ionicModal, $filter, $http) {

    $scope.loginViewModel = [];

    // ICI coder le model du shcema vers le service distant
    prepareInternOfferToJson = function(){
        return JSON.stringify({});
    }

    $scope.afterFormulaireAddInternOffer = function() {
        $http({
            method: 'POST',
            url: $scope.urlServeur+'/internoffer',
            data: prepareInternOfferToJson($scope.loginViewModel)
        }).then(
            function(response){

            }, function(response){

            }
        );
    }
});
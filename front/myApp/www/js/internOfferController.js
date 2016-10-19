angular.module('app.controllers')
.controller('InternOfferController', function($scope, $stateParams) {
    if (!$stateParams.offerId) throw new Error("No id passed to InternOfferController");
    // Récupération de l'id de l'offre en cours
    $scope.offerId = $stateParams.offerId;
    
    // Déclaration de l'offre
    $scope.offer = { 
        title: 'CGI',
        id: $scope.offerId
    };
});
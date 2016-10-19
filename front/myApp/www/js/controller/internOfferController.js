angular.module('app.controllers')
.controller('InternOfferController', function($scope, $stateParams, $rootScope) {
    if (!$stateParams.offerId) throw new Error("No id passed to InternOfferController");
    // Récupération de l'id de l'offre en cours
    $scope.offerId = $stateParams.offerId;
    
    // Déclaration de l'offre
    $scope.offer = { 
        label: 'CGI - Poste d\'alternance',
        id: $scope.offerId,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut faucibus lectus. Ut enim purus, ullamcorper at ligula nec, mattis accumsan ex. Nullam eu iaculis augue, egestas vulputate ante. Aliquam vel eleifend magna, a facilisis turpis. Donec nec nisl convallis, cursus lorem sed, rhoncus quam. Etiam quis enim arcu. Nunc non pretium sem. Sed sit amet bibendum ex. Maecenas ac lacus ac sem molestie viverra. Mauris pretium elit nunc, non volutpat ex tristique vitae. Sed quis dui dui. Suspendisse potenti. Suspendisse pellentesque lacus vitae elit ultricies, nec ullamcorper odio pellentesque. Nunc efficitur, mauris et dignissim. retium sem. Sed sit amet bibendum ex. Maecenas ac lacus ac sem molestie viverra. Mauris pretium elit nunc, non volutpat ex tristique vitae. Sed quis dui dui. Suspendisse potenti. Suspendisse pellentesque lacus vitae elit ultricies, nec ullamcorper odio pellentesque. Nunc efficitur, mauris et dignissim.',
        earning: '1000000€',
        referent: 'JEAN BOMBER',
        location: 'PAR ICI ET PAR LA',
        duration: 'Jusqu\'à ce que ton âme soit consumé'
    };
    
    // Déclaration de l'offre
    //TODO - Récupérer les attributs de l'offre en base à partir de l'offre de l'id
    /*
    $scope.offer = { 
        id: $scope.offerId,
        label: $scope.label,
        description: $scope.description,
        earning: $scope.earning,
        referent: $scope.mail,
        location: $scope.location,
        duration: $scope.duration
    };
     */
    
    // Add current offer to user's cart
    $scope.addToCart = function () {
        $rootScope.cartOffers.push($scope.offer);
    };
    
    $scope.disableButton = function() {
        $scope.document.getElementById('buttonApply').disable(true);
    }
});
angular.module('app.controllers')
.controller('InternOfferController', function($scope, $stateParams) {
    if (!$stateParams.offerId) throw new Error("No id passed to InternOfferController");
    // Récupération de l'id de l'offre en cours
    $scope.offerId = $stateParams.offerId;
    
    // Déclaration de l'offre
    $scope.offer = { 
        label: 'CGI - Poste d\'alternance pour gens souhaitant rester pauvre',
        id: $scope.offerId,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut faucibus lectus. Ut enim purus, ullamcorper at ligula nec, mattis accumsan ex. Nullam eu iaculis augue, egestas vulputate ante. Aliquam vel eleifend magna, a facilisis turpis. Donec nec nisl convallis, cursus lorem sed, rhoncus quam. Etiam quis enim arcu. Nunc non pretium sem. Sed sit amet bibendum ex. Maecenas ac lacus ac sem molestie viverra. Mauris pretium elit nunc, non volutpat ex tristique vitae. Sed quis dui dui. Suspendisse potenti. Suspendisse pellentesque lacus vitae elit ultricies, nec ullamcorper odio pellentesque. Nunc efficitur, mauris et dignissim. retium sem. Sed sit amet bibendum ex. Maecenas ac lacus ac sem molestie viverra. Mauris pretium elit nunc, non volutpat ex tristique vitae. Sed quis dui dui. Suspendisse potenti. Suspendisse pellentesque lacus vitae elit ultricies, nec ullamcorper odio pellentesque. Nunc efficitur, mauris et dignissim.',
        earning: '1000000€',
        referent: 'JEAN BOMBER',
        location: 'PAR ICI ET PAR LA',
        duration: 'Jusqu\'à ce que ton âme soit consumé'
    };
});
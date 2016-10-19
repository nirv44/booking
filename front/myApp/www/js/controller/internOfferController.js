angular.module('app.controllers')
.controller('InternOfferController', function($scope, $stateParams, $rootScope) {
    if (!$stateParams.offerId) throw new Error("No id passed to InternOfferController");
    // Récupération de l'id de l'offre en cours
    $scope.offerId = $stateParams.offerId;
    
    // Déclaration de l'offre
    $scope.offer = { 
        id: 1, 
        label: 'Développeur',
        earning: '10K€',
        description: 'description test 1',
        location: 'Nulle part',
        duration: '1 jour',
        referent: {
            name: 'Jean BOMBER',
            company : {
                name: 'CGI',
                logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png'
            }
        },
        currentApply: {
            state: 1,
            stateLabel: 'disponible'
        },
        applies: [
            {
                state: 1,
                stateLabel: 'disponible'
            }
        ]
    };
    
    // Add current offer to user's cart
    $scope.addToCart = function () {
        $rootScope.cartOffers.push($scope.offer);
    };
});
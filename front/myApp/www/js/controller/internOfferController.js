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
            company : {
                name: 'CGI',
                logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png'
            }
        },
        currentApply: {
            state: 1,
            stateLabel: 'available'
        },
        applies: [
            {
                state: 1,
                stateLabel: 'available'
            }
        ]
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
});
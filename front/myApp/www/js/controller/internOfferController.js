angular.module('app.controllers')
.controller('InternOfferController', function($http, $scope, $stateParams, $rootScope) {
    if (!$stateParams.offerId) throw new Error("No id passed to InternOfferController");
    // Récupération de l'id de l'offre en cours
    $scope.offerId = $stateParams.offerId;
    
    // Mock for the offer
    $scope.offer = { 
        id: 1, 
        label: 'Analyste programmeur junior',
        earning: '10K€',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim dui ac metus suscipit, in commodo ligula tincidunt.\n\n Suspendisse rutrum molestie est, non tempor ligula interdum eu. Curabitur vulputate enim tellus, ut dapibus eros viverra sed. Vivamus consectetur, sem sed maximus placerat, nunc neque tincidunt erat,\n\n id volutpat tellus urna a nibh. Sed ac volutpat sem. Sed ac mi justo. Maecenas in dapibus quam. Integer scelerisque pulvinar leo, et luctus ligula ultrices vel. Vestibulum ultricies tempor pretium. Vestibulum lobortis sapien eget libero pellentesque efficitur. In efficitur vulputate lorem, sit amet semper purus vulputate non. Quisque convallis nisl sit amet sodales placerat.',
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
    
    // Get detailed information of the internship offer
    $http({
        method: 'GET',
        url: $rootScope.serverURL+'/internoffer/'+$scope.offerId,
        headers: {'Content-Type': 'application/json'}
    }).then(
        function(response){
            if(response.data !== null){
                //declar the offer
                $scope.offer = response.data;
            }
        }, 
        function(response){
            console.log(response);
        }
    );
    
    // Add current offer to user's cart
    $scope.addToCart = function () {
        $rootScope.cartOffers.push($scope.offer);
    };
});
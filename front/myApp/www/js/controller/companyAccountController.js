angular.module('app.controllers')
.controller('CompanyAccountController', function($http, $scope, $rootScope, $ionicModal) {
    // Form data for the login modal
    $scope.ratingTraineeViewModel = [];
    $scope.companyOffers = [];

    // ViewModel for trainee rating
    $scope.ratingTraineeViewModel = {};

    // Create trainee rating modal
    $ionicModal.fromTemplateUrl('templates/ratingTrainee.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.ratingTraineeModal = modal;
    });
    
    // Open company rating modal
    $scope.doRatingTrainee = function() {
        $scope.ratingTraineeModal.show();
    };
    
    // Close company rating modal
    $scope.doCloseRatingTraineeForm = function() {
        $scope.ratingTraineeModal.hide();
    };
    
    // Send current company rating to server
    $scope.doRateTrainee = function() {
        // TODO [MLGA] : Send rating to server
        $scope.ratingTraineeModal.hide();
    };
    
    // Load current company trainees
    /*$http({
        method: 'GET',
        url: $rootScope.serverURL + '/internoffer/company/' + $rootScope.user.name,
        headers: {'Content-Type': 'application/json'}
    }).then(
        function(response){
            if(response.data !== null){
                $scope.trainees = response.data;
            }
        }, 
        function(response){
            console.log("Error CompanyAccountController.LoadTrainees : ", response);
        }
    );*/
    
    // Load current company offers
    $http({
        method: 'GET',
        url: $rootScope.serverURL + '/internoffer/company/' + $rootScope.user.name,
        headers: {'Content-Type': 'application/json'}
    }).then(
        function(response){
            if(response.data !== null){
                $scope.companyOffers = response.data;
            }
        }, 
        function(response){
            console.log("Error CompanyAccountController.LoadOffers : ", response);
        }
    );
    
    // Mock trainees
    $scope.trainees = [
        { 
            _id: 1, 
            label: 'Développeur',
            earning: '10K€',
            description: 'description test 1',
            location: 'Nulle part',
            duration: '1 jour',
            referent: {
                name: 'CGI',
                logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png'
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
            ],
            intern: {
                lastName: 'Coucou',
                firstName: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        },
        { 
            _id: 2, 
            label: 'Lead developer',
            earning: '15K€',
            description: 'description test 2',
            location: 'Nulle part',
            duration: 'Tous le temps',
            referent: {
                name: 'IBP',
                logoLink: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAYOAAAAJGZmODE5NzgwLTIxODgtNDMwZi05YmY5LWI2NjU1NzgwNmU3NQ.png'
            },
            currentApply: {
                state: 1,
                stateLabel: 'refused'
            },
            applies: [
                {
                    state: 1,
                    stateLabel: 'refused'
                }
            ],
            intern: {
                lastName: 'Coucou',
                firstName: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        },
        { 
            _id: 3, 
            label: 'Développeur',
            earning: '8K€',
            description: 'description test 3',
            location: 'Nulle part',
            duration: '10 semaines',
            referent: {
                name: 'CapGemini',
                logoLink: 'http://www.handi-numerique.com/sites/default/files/styles/medium/public/entreprises/capgemini_0.png?itok=jf_C1jbu'
            },
            currentApply: {
                state: 1,
                stateLabel: 'applied'
            },
            applies: [
                {
                    state: 1,
                    stateLabel: 'applied'
                }
            ],
            intern: {
                lastName: 'Coucou',
                firstName: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        },
        { 
            _id: 4, 
            label: 'Testeur',
            earning: '7K€',
            description: 'description test 4',
            location: 'Nulle part',
            duration: '1 an',
            referent: {
                name: 'Atos',
                logoLink: 'https://upload.wikimedia.org/wikipedia/fr/1/16/Logo_Atos_600x424.jpg'
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
            ],
            intern: {
                lastName: 'Coucou',
                firstName: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        }
    ];
});
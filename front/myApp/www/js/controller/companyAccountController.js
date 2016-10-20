angular.module('app.controllers')
.controller('CompanyAccountController', function($scope, $ionicModal, $stateParams) {
    
    // Form data for the login modal
    $scope.ratingTraineeViewModel = [];
    
    $ionicModal.fromTemplateUrl('templates/ratingTrainee.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.ratingTraineeViewModel = modal;
    });
    
    // Perform
    $scope.doRatingTrainee = function() {
        $scope.ratingTraineeViewModel.show();
    }
    
    $scope.doCloseRatingTraineeForm = function() {
        $scope.ratingTraineeViewModel.hide();
    }
    
    $scope.doRateTrainee = function() {
        $scope.ratingTraineeViewModel.hide();
    }
    
    // Mock
    $scope.company = {
        id: 1,
        nameCompany: 'CGI',
        logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png',
        location: 'Nulle part',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        turnover: '10000',
        type: 'ESN',
        numberEmployees: '5000',
        website: 'www.truc.com'
    };
    
    // Mock offers
    $scope.myInternships = [
        { 
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
            ],
            intern: {
                lastname: 'Coucou',
                firstname: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        },
        { 
            id: 2, 
            label: 'Lead developer',
            earning: '15K€',
            description: 'description test 2',
            location: 'Nulle part',
            duration: 'Tous le temps',
            referent: {
                company : {
                    name: 'IBP',
                    logoLink: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAYOAAAAJGZmODE5NzgwLTIxODgtNDMwZi05YmY5LWI2NjU1NzgwNmU3NQ.png'
                }
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
                lastname: 'Coucou',
                firstname: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        },
        { 
            id: 3, 
            label: 'Développeur',
            earning: '8K€',
            description: 'description test 3',
            location: 'Nulle part',
            duration: '10 semaines',
            referent: {
                company : {
                    name: 'CapGemini',
                    logoLink: 'http://www.handi-numerique.com/sites/default/files/styles/medium/public/entreprises/capgemini_0.png?itok=jf_C1jbu'
                }
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
                lastname: 'Coucou',
                firstname: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        },
        { 
            id: 4, 
            label: 'Testeur',
            earning: '7K€',
            description: 'description test 4',
            location: 'Nulle part',
            duration: '1 an',
            referent: {
                company : {
                    name: 'Atos',
                    logoLink: 'https://upload.wikimedia.org/wikipedia/fr/1/16/Logo_Atos_600x424.jpg'
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
            ],
            intern: {
                lastname: 'Coucou',
                firstname: 'Toto',
                mail: 'Toto.coucou@titi.com'
            }
        }
    ];
});
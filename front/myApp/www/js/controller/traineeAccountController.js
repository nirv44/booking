angular.module('app.controllers')
.controller('TraineeAccountController', function($scope, $ionicModal) {
    
    // Form data for the login modal
    $scope.ratingCompanyViewModel = [];
    
    $ionicModal.fromTemplateUrl('templates/ratingCompany.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.ratingCompanyViewModel = modal;
    });
    
    // Perform
    $scope.doRatingCompany = function() {
        $scope.ratingCompanyViewModel.show();
    }
    
    $scope.doCloseRatingCompanyForm = function() {
        $scope.ratingCompanyViewModel.hide();
    }
    
    $scope.doRateCompany = function() {
        $scope.ratingCompanyViewModel.hide();
    }
    
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
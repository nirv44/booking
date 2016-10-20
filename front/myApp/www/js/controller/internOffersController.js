angular.module('app.controllers')
.controller('InternOffersController', function($scope, $ionicModal, $http, $rootScope) {
    
    // ViewModel for filterModal
    $scope.filterViewModel = {};

    $scope.ICIJERECUPEREMESSUPPERTINTERNOFFERMAISILFAUTCHANGGERLENOMDELAFOCNTION = function(){
        var req = {
            method: 'GET',
            URL: $rootScope.serverURL+'/internoffer'
        }
        $http(req).then(
            function(response){
                // ICI AVEC response.data y a toutes les données
                //response.data;

                // ET LA IL FAUT RECUPE LA COMPANY LI2E A LIDEE RECUP
                var reqCompany = {
                    method: 'GET',
                    URL: $rootScope.serverURL+'/company/'+response.data.referent
                }
                $http(reqCompany).then(
                    function(responseCompany){
                        // Oh la j'ai la company par 
                        //responseCompany.data;
                    },function(responseCompany){

                    });
                // PAREIL POUR CURRENTAPPLY

                // ICI PAREIL POUR LE APPLY
            }, function(response){

            });
        );
    }
        
    // Mock offers
    var mockOffers = [
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
            ]
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
            ]
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
            ]
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
            ]
        },
        { 
            id: 5, 
            label: 'Technicien de surface',
            earning: '22K€',
            description: 'description test 5',
            location: 'Nulle part',
            duration: 'A vie',
            referent: {
                company : {
                    name: 'Google',
                    logoLink: 'https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg'
                }
            },
            currentApply: {
                state: 1,
                stateLabel: 'valid'
            },
            applies: [
                {
                    state: 1,
                    stateLabel: 'valid'
                }
            ]
        },
        { 
            id: 6, 
            label: 'Team manager',
            earning: '1K€',
            description: 'description test 6',
            location: 'Nulle part',
            duration: '6 mois',
            referent: {
                company : {
                    name: 'Accenture',
                    logoLink: 'http://logok.org/wp-content/uploads/2014/03/Accenture-logo-1024x768.png'
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
            ]
        }
    ];
    
    $http({
        method: 'GET',
        url: $rootScope.serverURL + '/internoffer/',
        headers: {'Content-Type': 'application/json'}
    }).then(
        function(response){
            if(response.data !== null){
                $scope.offers = response.data;
            }
        }, 
        function(response){
            console.log("Error InternOffersController.GetOffers : " + response);
            $scope.offers = mockOffers;
        }
    );
    
    // Create the filter modal
    $ionicModal.fromTemplateUrl('templates/filterOffer.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.filterOfferModal = modal;
    });
    
    // Open filter form
    $scope.filterOffer = function() {
        $scope.filterOfferModal.show();
    };
    
    // Close filter form
    $scope.doCloseFilterOffer = function() {
        $scope.filterOfferModal.hide();
    };
    
    // Filter offer list 
    $scope.doFilterOffer = function() {
        $scope.filterOfferModal.hide();
        // TODO [AVAN] : Launch filtering
    };
    
});
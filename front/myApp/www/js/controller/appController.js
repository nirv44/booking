angular.module('app.controllers', [])
.controller('AppController', function($scope, $ionicModal, $http, $state, $rootScope) {
    
    // Define global variable for offers added to cart
    $rootScope.cartOffers = [];
    
    // Form data for the login modal
    $scope.loginViewModel = {};
    $rootScope.serverURL = "http://163.172.188.205:3000";

    // Form data for the login modal
    $scope.subscribeViewModel = {};

    // Create the login modal
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.loginModal = modal;
        $scope.loginModal.show();
    });
    
    // Create the subscription modal
    $ionicModal.fromTemplateUrl('templates/subscribe.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.subscribeModal = modal;
    });

    // Open the login modal
    $scope.login = function() {
        $scope.loginModal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        if ($scope.loginViewModel.username !== "" && $scope.loginViewModel.password !== "") {
            $http({
                method: 'GET',
                url: $rootScope.serverURL + '/account/' + $scope.loginViewModel.username + '/' + $scope.loginViewModel.password,
                headers: {'Content-Type': 'application/json'}
            }).then(
                function(response){
                    if(response.data !== null){
                        $rootScope.user = response.data;
                        $scope.loginViewModel = {};
                        if (!$rootScope.user.isTrainee) {
                            $state.go('app.companyAccount');
                        }
                        else {
                            $state.go('app.offers');
                        }
                        $scope.loginModal.hide();
                    }
                }, 
                function(response){
                    console.log(response);
                }
            );
        }
    };
    
    subscribeTraineeTojson = function(inscription){
        return JSON.stringify({
            mail: inscription.mail,
            login: inscription.username, 
            password: inscription.password, 
            lastName: inscription.name,
            firstName: inscription.firstName
        });
    };

    subscribeCompanyaccountTojson = function(inscription){
        return JSON.stringify({
            login: inscription.username,
            password: inscription.password, 
            mail: inscription.mail, 
            name: inscription.nameCompany,
            description: inscription.description,
            turnover: inscription.turnover,
            type: inscription.type,
            numberEmployee: inscription.numberEmployees,
            website: inscription.website        
        });
    };

    // Perform the subscripe action when the user submits the subscribe form
    $scope.doSubscribe = function() {
        if ($scope.subscribeViewModel.isTrainee === true) {
            $http({
                method: 'POST',
                url: $rootScope.serverURL + '/trainneraccount',
                data: subscribeTraineeTojson($scope.subscribeViewModel)
            }).then(
                function(response){
                    $scope.subscribeModal.hide();
                    $scope.subscribeViewModel = {};
                }, function(response){
                    console.log(response);
                }
            );
        } else {
            $http({
                method: 'POST',
                url: $rootScope.serverURL + '/companyaccount',
                data: subscribeCompanyaccountTojson($scope.subscribeViewModel)
            }).then(
                function(response){
                    $scope.subscribeModal.hide();
                    $scope.subscribeViewModel = {};
                }, function(response){
                    console.log(response);
                }
            );           
        }
    };
    
    // Open the inscription form
    $scope.formInscription = function() {
        $scope.subscribeModal.show();
    };
    
    // Close the inscription form
    $scope.doCloseSubscribeForm = function () {
        $scope.subscribeViewModel = {};
        $scope.subscribeModal.hide();
    };  
    
    // Show current user cart
    $rootScope.showCart = function () {
        $state.go('app.cart');
    };
    
    // Log out current user
    $scope.logout = function() {
        $rootScope.user = {};
        $rootScope.cartOffers = [];
        $scope.subscribeViewModel = {};
        $scope.loginViewModel = {};
        $scope.login();
    };
});

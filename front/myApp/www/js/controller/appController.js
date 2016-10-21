angular.module('app.controllers', [])
.controller('AppController', function($scope, $ionicModal, $http, $state, $rootScope) {
    
    // Define global variable for offers added to cart
    $rootScope.cartOffers = [];
    
    // Form data for the login modal
    $scope.loginViewModel = {};
    $rootScope.serverURL = "http://163.172.188.205:3000";
    
    // Images URL
    $rootScope.imagesUrl = {
        available: 'http://hpics.li/3384556',
        applied: 'http://hpics.li/49ac206',
        at: 'http://hpics.li/e316a20',
        cart: 'http://hpics.li/5de95a1',
        clock: 'http://hpics.li/38a7685',
        close: 'http://hpics.li/10b6678',
        counter: 'http://hpics.li/1118546',
        delete: 'http://hpics.li/1872279',
        delete2: 'http://hpics.li/1423278',
        employee: 'http://hpics.li/6294111',
        globe: 'http://hpics.li/3038ffb',
        help: 'http://hpics.li/018dc71',
        internshipsOff: 'http://hpics.li/6689659',
        internshipsOn: 'http://hpics.li/d213c05',
        location: 'http://hpics.li/df88071',
        logo: 'http://hpics.li/8c1cb93',
        money: 'http://hpics.li/2c840af',
        offersOff: 'http://hpics.li/c145d7d',
        offersOn: 'http://hpics.li/1c9a818',
        refused: 'http://hpics.li/37702f9',
        search: 'http://hpics.li/e2295e0',
        traineesOff: 'http://hpics.li/ff1b466',
        traineesOn: 'http://hpics.li/68271a3',
        valid: 'http://hpics.li/9c36db0'
    };
    
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
                    console.log("Error AppController.Login : ", response);
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
                    console.log("Error AppController.SubscribeTrainee : ", response);
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
                    console.log("Error AppController.SubscribeCompany : ", response);
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

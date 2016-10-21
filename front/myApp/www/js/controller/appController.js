angular.module('app.controllers', [])
.controller('AppController', function($scope, $ionicModal, $http, $state, $rootScope) {
    
    // Define global variable for offers added to cart
    $rootScope.cartOffers = [];
    
    // Form data for the login modal
    $scope.loginViewModel = {};
    $rootScope.serverURL = "http://163.172.188.205:3000";
    
    // Images URL
    $rootScope.imagesUrl = {
        available: 'https://s14.postimg.org/z3s6mu2gx/available.png',
        applied: 'https://s21.postimg.org/eirsi14wn/applied.png',
        at: 'https://s18.postimg.org/tdlkm0zy1/image.png',
        cart: 'https://s9.postimg.org/a65qu607z/cart.png',
        clock: 'https://s17.postimg.org/5bzkgsh8f/clock.png',
        close: 'https://s21.postimg.org/e4fnv9b2v/close.png',
        counter: 'https://s21.postimg.org/bvalqxlzr/counter.png',
        delete: 'https://s10.postimg.org/yesdbtbe1/delete.png',
        delete2: 'https://s16.postimg.org/4osarijmd/delete2.png',
        employee: 'https://s14.postimg.org/4x5ul0rz5/employee.png',
        globe: 'https://s13.postimg.org/ru0n4dmav/globe.png',
        help: 'https://s12.postimg.org/4h40phlfh/help.png',
        internshipsOff: 'https://s13.postimg.org/aj20ax5lz/internships_off.png',
        internshipsOn: 'https://s10.postimg.org/5hgncj96x/internships_on.png',
        location: 'https://s10.postimg.org/n52vkk52h/location.png',
        logo: 'https://s21.postimg.org/upxwbxasj/logo_bookingmytraining.png',
        money: 'https://s12.postimg.org/696371gzh/money.png',
        offersOff: 'https://s16.postimg.org/r75q4omxh/offers_off.png',
        offersOn: 'https://s18.postimg.org/t6wjdtuah/offers_on.png',
        refused: 'https://s13.postimg.org/hcmuzndtj/refused.png',
        search: 'https://s9.postimg.org/e4jaix827/search.png',
        traineesOff: 'https://s4.postimg.org/3vp4uj9rh/trainees_off.png',
        traineesOn: 'https://s13.postimg.org/hewvvz6rr/trainees_on.png',
        valid: 'https://s12.postimg.org/e7ymv3akt/valid.png'
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

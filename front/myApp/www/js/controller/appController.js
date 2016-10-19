angular.module('app.controllers', [])
.controller('AppController', function($scope, $ionicModal, $http, $state, $rootScope) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    
    // Define global variable for offers added to cart
    $rootScope.cartOffers = [];
    
    // Form data for the login modal
    $scope.loginViewModel = {};
    //$scope.serverURL = "http://163.172.188.205:3000";
    $scope.serverURL = "http://127.0.0.1:3000";

    // Form data for the login modal
    $scope.subscribeViewModel = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
    });
    
    $ionicModal.fromTemplateUrl('templates/subscribe.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.subscribeModal = modal;
    });

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        var req = {
            method: 'GET',
            url: $scope.serverURL+'/trainneraccount/'+$scope.loginViewModel.username+'/'+$scope.loginViewModel.password,
            headers: {'Content-Type': 'application/json'}
        };
        $http(req).then(
            function(response){
                if(response.data != null){
                   
                }
            }, 
            function(response){
                console.log(response);
            }
        );
         $scope.modal.hide();
    };
    
    $scope.formInscription = function() {
        $scope.subscribeModal.show();
    };

    subscribeTraineeTojson = function(inscription){
        return JSON.stringify({
            mail: inscription.mail,
            login: inscription.username, 
            password: inscription.password, 
            lastName: inscription.name,
            firstName: inscription.firstName
        });
    }

    subscribeCompanyaccountTojson = function(inscription, idCompany){
        return JSON.stringify({
            mail: inscription.mail,
            login: inscription.username, 
            password: inscription.password, 
            lastName: inscription.name,
            firstName: inscription.firstName,
            idCompany: idCompany
        });
    }

// atente de mise a jour
    subscribeCompanyToJson = function(inscription){
        return JSON.stringify({
            grade: "",
            comment: "" 
        });
    }

    // Perform the subscripe action when the user submits the subscribe form
    $scope.doSubscribe = function() {

        if(subscribeViewModel.isTrainee == true){
            var req = {
                method: 'POST',
                url: $scope.serverURL+'/trainneraccount',
                data: subscribeTraineeTojson($scope.subscribeViewModel)
            }
            $http(req).then(
                function(response){

                }, function(response){

                }
            );
        }else{
            // insert company
            var req1 = {
                method: 'POST',
                url: $scope.serverURL+'/company',
                data : subscribeCompanyToJson($scope.subscribeViewModel)
            }
            $http(req1).then(
                // Si company bien insérer on prend l'id pour le liée au company account
                function(response){
                    var req2 = {
                        method: 'POST',
                        url: $scope.serverURL+'/companyaccount',
                        data: subscribeCompanyaccountTojson($scope.subscribeViewModel, response.data.idCompany)
                    }
                    $http(req).then(
                        function(response){
                            $scope.subscribeModal.hide();
                        }, function(response){

                        }
                    );

                }, function(response){

                }
            );

            
        }


       


        console.log('Subscribe : ', $scope.subscribeViewModel);
    };
    
    // Show current user cart
    $scope.showCart = function () {
        $state.go('app.cart');
    };  
});

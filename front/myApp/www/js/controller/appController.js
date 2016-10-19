angular.module('app.controllers', [])
.controller('AppController', function($scope, $ionicModal, $http) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

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
                    $scope.modal.hide();
                }
            }, 
            function(response){
                console.log(response);
            }
        );
    };
    
    $scope.formInscription = function() {
        $scope.subscribeModal.show();
    };

    // Perform the subscripe action when the user submits the subscribe form
    $scope.doSubscribe = function() {
        console.log('Subscribe : ', $scope.subscribeViewModel);
        $scope.subscribeModal.hide();
    };
    
    // Show current user cart
    $scope.showCart = function () {
        alert("ShowCart !");
    }; 
});

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
    $scope.serverURL = "http://163.172.188.205:3000"

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
    });

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        
    var req = {
        method: 'POST',
        url: $scope.serverURL+'/trainneraccount',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify({ login: "test", password: "test",lastName: "test",firstName: "test"})
    };

    $http(req).then(
        function(response){
            console.log("ok");
        }, 
        function(response){
            console.log(response);
        }
    );



        $scope.modal.hide();
    };


    $scope.formInscription = function() {
        
    }

});

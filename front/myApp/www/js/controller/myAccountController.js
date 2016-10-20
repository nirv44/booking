angular.module('app.controllers')
.controller('MyAccountController', function($scope, $stateParams) {
    if (!$stateParams.offerId) throw new Error("No id passed to MyAccount");
    // Récupération de l'id de l'offre en cours
    $scope.offerId = $stateParams.offerId;

    // Déclaration de l'offre
    $scope.account = {
        firstname: 'Jean',
        lastname: 'Michel',
        login: 'jmichel',
        password: 'password',
        email: 'jmichel@gmail.com',

//stagiaire : niveau detudes
//entreprise : donnees dentreprise -->
    };
});

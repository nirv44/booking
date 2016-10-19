angular.module('app.controllers')
.controller('InternOffersController', function($scope) {
    // Récupération des offres
    $scope.offers = [
        { title: 'CGI', id: 1 },
        { title: 'CGI', id: 2 },
        { title: 'CapGemini', id: 3 },
        { title: 'Atos', id: 4 },
        { title: 'SII', id: 5 },
        { title: 'Accenture', id: 6 }
    ];
});
angular.module('app.controllers')
.controller('CompanyController', function($scope, $stateParams, $rootScope) {
    if (!$stateParams.companyId) throw new Error("No id passed to CompanyController");
    // Récupération de l'id de l'offre en cours
    $scope.companyId = $stateParams.companyId;
    
    // Mock
    $scope.company = { 
        id: 1, 
        nameCompany: 'CGI',
        logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png',
        location: 'Nulle part',
        description: 'description test 2',
        turnover: '100%',
        type: 'ESN',
        numberEmployees: '5000',
        website: 'www.truc.com',
        creationDate: '01/01/0001'
    };

});
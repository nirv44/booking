angular.module('app.controllers')
.controller('CompanyAccountController', function($scope, $stateParams) {

    // Mock
    $scope.company = { 
        id: 1, 
        nameCompany: 'CGI',
        logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png',
        location: 'Nulle part',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        turnover: '10000',
        type: 'ESN',
        numberEmployees: '5000',
        website: 'www.truc.com'
    };
});
angular.module('app.controllers')
.controller('MyCompaniesController', function($scope) {
    // Mock
    $scope.myCompanies = [
        { 
            id: 1, 
            name: 'CGI',
            logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png',
            location: 'Nulle part',
            description: 'description test 2',
            turnover: '100%',
            type: 'ESN',
            numberEmployees: '5000',
            website: 'www.truc.com',
            creationDate: '01/01/0001'
        },
        { 
            id: 2, 
            name: 'CGI',
            logoLink: 'http://3.bp.blogspot.com/-6AOA3ACYmos/UPZGQCqEwYI/AAAAAAAAVnM/91uDFflFQEs/s1600/CGI+logo+2013.png',
            location: 'Nulle part',
            description: 'description test 2',
            turnover: '100%',
            type: 'ESN',
            numberEmployees: '5000',
            website: 'www.truc.com',
            creationDate: '01/01/0001'
        },
        { 
            id: 3, 
            name: 'CapGemini',
            logoLink: 'http://www.handi-numerique.com/sites/default/files/styles/medium/public/entreprises/capgemini_0.png?itok=jf_C1jbu',
            location: 'Nulle part',
            description: 'description test 2',
            turnover: '100%',
            type: 'ESN',
            numberEmployees: '5000',
            website: 'www.truc.com',
            creationDate: '01/01/0001'
        }
    ];
});
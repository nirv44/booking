angular.module('app', ['ionic', 'app.controllers'])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default
        // (remove this to show the accessory bar above the keyboard for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppController'
    })
    
    // ===== Offers page start =====
    .state('app.offers', {
        url: '/offers',
        views: {
            'mainContent': {
                templateUrl: 'templates/internOffers.html',
                controller: 'InternOffersController'
            }
        }
    })
    .state('app.offer', {
        url: '/offers/:offerId',
        views: {
            'mainContent': {
                templateUrl: 'templates/internOffer.html',
                controller: 'InternOfferController'
            }
        }
    })
    // ===== Offers page end =====
    
    
    // ===== Company account page start =====
    .state('app.companyAccount', {
        url: '/companyAccount',
        views: {
            'mainContent': {
                templateUrl: 'templates/companyAccount.html',
                controller: 'CompanyAccountController'
            }
        }
    })
    // ===== Company account page end =====
    
    
    // ===== Trainee account page start =====
    .state('app.traineeAccount', {
        url: '/traineeAccount',
        views: {
            'mainContent': {
                templateUrl: 'templates/traineeAccount.html',
                controller: 'TraineeAccountController'
            }
        }
    })
    .state('app.myCompanies', {
        url: '/myCompanies',
        views: {
            'mainContent': {
                templateUrl: 'templates/myCompanies.html',
                controller: 'MyCompaniesController'
            }
        }
    })
    .state('app.company', {
        url: '/myCompanies/:companyId',
        views: {
            'mainContent': {
                templateUrl: 'templates/company.html',
                controller: 'CompanyController'
            }
        }
    })
    // ===== Trainee account page end =====
    
    
    // ===== Cart page start =====
    .state('app.cart', {
        url: '/cart',
        views: {
            'mainContent': {
                templateUrl: 'templates/cart.html',
                controller: 'CartController'
            }
        }
    });
    // ===== Cart page end =====

    // Default url
    $urlRouterProvider.otherwise('/app/offers');
});

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
    .state('app.compte  ', {
        url: '/compte',
        views: {
            'mainContent': {
                templateUrl: 'templates/compteStagiaire.html'
            }
        }
    })
    .state('app.compte', {
        url: '/offers/:offerId',
        views: {
            'mainContent': {
                templateUrl: 'templates/myAccount.html',
                controller: 'myAccountController'
            }
        }
    });
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
    .state('app.myInternships', {
        url: '/myInternships',
        views: {
            'mainContent': {
                templateUrl: 'templates/myInternships.html',
                controller: 'MyInternshipsController'
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
    .state('app.cart', {
        url: '/cart',
        views: {
            'mainContent': {
                templateUrl: 'templates/cart.html',
                controller: 'CartController'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/offers');
});

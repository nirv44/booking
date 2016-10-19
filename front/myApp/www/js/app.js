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
    .state('app.search', {
        url: '/search',
        views: {
            'mainContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })
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
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/offers');
});

angular.module('candidate', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','ngCordova']);




//angular routing details
angular.module('candidate').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        views: {
                  // So this one is targeting the unnamed view within the parent state's template.
             '': {
                   templateUrl: 'angularModules/home/partials/Partial-home.html',
                   controller:'HomeCtrl'
                 }
        }
    })
    .state('splash', {
        url: '/',
        templateUrl: 'angularModules/splashScreen/partials/Partial-splash.html',
        controller:'SplashCtrl'
    })
    .state('login', {
        url: '/login',
        views: {
            '': {
                templateUrl: 'angularModules/login/partials/Partial-login.html',
                controller:'LoginCtrl'
            }
        }
    })
    .state('app', {
        url: '/app',
        views: {
            '': {
                templateUrl: 'angularModules/appHome/partials/Partial-app.html',
                controller:'AppCtrl'
            }
        }
    });
    ;
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

}]);

angular.module('candidate').run(['$rootScope',function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

}]);

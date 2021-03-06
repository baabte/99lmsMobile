angular.module('candidate', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','ngCordova']);




//angular routing details
angular.module('candidate').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        views: {
                  // So this one is targeting the unnamed view within the parent state's template.
             '': {
                   templateUrl: 'angularModules/home/partials/Partial-home.html'
                 }
        }
    })
    .state('splash', {
        url: '/',
        templateUrl: 'angularModules/splashScreen/partials/Partial-splash.html',
        controller:'SplashCtrl'
    });
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

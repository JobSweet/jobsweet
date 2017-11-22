(function () {
    'use strict'

    angular.module('jobsweet', [
        'ui.router'
        , 'ngAnimate'
        , 'ngTouch'
        , 'ngSanitize'
        , 'ui.bootstrap'
        , 'users'
    ])
        .config(RouteConfig);

    RouteConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    function RouteConfig($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
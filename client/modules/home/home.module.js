(function () {
    'use strict'

    angular.module('home', [
        'ngAnimate'
        , 'ngSanitize'
        , 'ngTouch'
             ,'ui.bootstrap'
            , 'ui.router'
    ])
    .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url:'/home'
                , templateUrl:'client/modules/home/views/home.html'
                , controller: 'homeController as $ctrl'
            })
    }
})();
(function (){
    'use strict'

    angular.module('jobsweet', [
        'ui.router'
        , 'ngAnimate'
        , 'ngTouch'
     , 'ngSanitize'
     , 'ui.bootstrap'
     ,'home'
    ])
        .config(RouteConfig);

    RouteConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    function RouteConfig($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
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

(function () {
    'use strict'

    angular.module('home')
        .controller('homeController', HomeController);

        HomeController.$inject = [];

        function HomeController () {
            const $ctrl = this;
        }
})();
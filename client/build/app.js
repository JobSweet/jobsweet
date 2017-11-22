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
(function () {
    'use strict'

    angular.module('users', [
        'ngAnimate'
        , 'ngSanitize'
        , 'ngTouch'
        , 'ui.bootstrap'
        , 'ui.router'
    ])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users'
                , templateUrl: 'client/modules/users/views/users.html'
                , controller: 'usersController as $ctrl'
            })
    }
})();

(function () {
    'use strict'

    angular.module('users')
        .controller('usersController', UsersController);

    UsersController.$inject = ['$scope'];

    function UsersController($scope) {
        let $ctrl = this;
        $ctrl.firstName ="dan";
    }
})();
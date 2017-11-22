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
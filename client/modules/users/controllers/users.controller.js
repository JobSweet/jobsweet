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
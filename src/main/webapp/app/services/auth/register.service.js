(function () {
    'use strict';

    angular
        .module('orguesaintmaximeApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();

(function () {
    'use strict';

angular
    .module('core').config(configuration)
    
    configuration.$inject = ['$urlRouterProvider'];
    
    /* @ngInject */
    function configuration ($urlRouterProvider) {
         $urlRouterProvider.otherwise('/home');
    }
    
})();
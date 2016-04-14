(function () {
    'use strict';

angular
    .module('view.business-leader').config(configuration)
    
    configuration.$inject = ['$stateProvider'];
    
    /* @ngInject */
    function configuration ($stateProvider) {
        $stateProvider.state('business-leader', {
                url: '/business-leader',
                views: {
                    "main": {
                        controller: 'BusinessLeader as vm',
                        templateUrl: 'app/Business-leader/business-leader.html'
                    }
                }
            });
    }
    
})();
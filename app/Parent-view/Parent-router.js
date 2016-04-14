(function () {
    'use strict';

angular
    .module('view.parent-view').config(configuration)
    
    configuration.$inject = ['$stateProvider'];
    
    /* @ngInject */
    function configuration ($stateProvider) {
        $stateProvider.state('parent-view', {
                url: '/home',
                views: {
                    "main": {
                        controller: 'ParentView as vm',
                        templateUrl: 'app/Parent-view/parent-view.html'
                    }
                }
            });
        
    }
    
})();
(function () {
    'use strict';

angular
    .module('view.parent-view').config(configuration)
    
    configuration.$inject = ['$stateProvider'];
    
    /* @ngInject */
    function configuration ($stateProvider) {
        $stateProvider.state('parent-view', {
                url: '/parent-view',
                views: {
                    "main": {
                        controller: 'ParentView as homeCtrl',
                        templateUrl: 'app/Parent-view/parent-view.html'
                    }
                }
            });
    }
    
})();
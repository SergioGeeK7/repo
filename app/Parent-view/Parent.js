(function() {
    'use strict';

    angular
        .module('view.parent-view')
        .controller('ParentView', Controller);

    Controller.$inject = [];

    /* @ngInject */
    function Controller(){
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();
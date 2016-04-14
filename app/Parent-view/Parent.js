(function() {
    'use strict';

    angular
        .module('view.parent-view')
        .controller('ParentView', Controller);

    Controller.$inject = ["user","riskStratification"];

    /* @ngInject */
    function Controller(user,riskStratification){
        var vm = this;
        vm.user = user.get(1);
        vm.risks = riskStratification.getCurrent();

        activate();

        ////////////////

        function activate() {
        }
    }
})();
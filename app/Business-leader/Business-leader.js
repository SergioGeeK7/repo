(function() {
    'use strict';

    angular
        .module('view.business-leader')
        .controller('BusinessLeader', Controller);

    Controller.$inject = ["charts"];

    /* @ngInject */
    function Controller(charts){
        var vm = this;
        charts.initCharts();

        activate();

        ////////////////

        function activate() {
        }
    }
})();
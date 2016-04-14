(function() {
    'use strict';

    angular
        .module('view.business-leader')
        .controller('BusinessLeader', Controller);

    Controller.$inject = ["charts","entities","$jquery"];

    /* @ngInject */
    function Controller(charts,entities,$){
        var vm = this;
        vm.entity = entities.get(1);
        var configObject  = charts.getAll();
        console.log(configObject.financialSummary);
        $('#financial-chart').highcharts(configObject.financialSummary);
        $('#physician-groups').highcharts(configObject.Phisyciangroups);

        activate();

        ////////////////

        function activate() {
        }
    }
})();
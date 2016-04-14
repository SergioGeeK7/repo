(function () {
    'use strict';
    angular
        .module('factories')
        .factory('riskStratification', riskStratification);

    riskStratification.$inject = [];

    /* @ngInject */
    function riskStratification(){
        var exports = {
            getCurrent: getCurrent
        };
        

        return exports;

        ////////////////

        function getCurrent() {
            return [
                {
                    name:"Projected",
                    value:"4"
                },
                {
                    name:"2015",
                    value:"3"
                },
                {
                    name:"2014",
                    value:"5"
                }
            ]
        }
    }
})();
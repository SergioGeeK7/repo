(function () {
    'use strict';
    angular
        .module('factories')
        .factory('entities', entities);

    entities.$inject = [];

    /* @ngInject */
    function entities(){
        
        var exports = {
            get: get,
            getAll:getAll
        };
      
        return exports;
        

        ////////////////
        function get(id) {    
            return getAll()[id];
        }
        
        function getAll (){
            return  [{
                name:"Premier PHC",
                state:"2340 East Trinity Mills Road",
                address:"Suit 250",
                carrolton: "TX 35262",
                ph:"1-432-452-5266",
                fax:"993-243-2566"
            }];
        }
    }
})();
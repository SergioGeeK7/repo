(function () {
    'use strict';
    angular
        .module('factories')
        .factory('user', user);

    user.$inject = [];

    /* @ngInject */
    function user(){
        
       
        
        var exports = {
            get:get,
            getAll:getAll
        };
        

        return exports;

        ////////////////
        
        function get(id) {
            return getAll()[id]
        }
        
        function getAll(){
            return [{
                age:41,
                dob:"07/12/74",
                name:"Patty Friendman",
                state:"221 W.Colorado Blvd",
                address:"Dallas TX 52345",
                ph : "432-452-5266",
                enrolledStatus: "ESRD"
            }];
        }
    }
})();
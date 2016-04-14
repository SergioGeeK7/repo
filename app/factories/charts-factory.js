(function () {
    'use strict';
    angular
        .module('factories')
        .factory('charts', charts);

    charts.$inject = [];

    /* @ngInject */
    function charts(){
        var exports = {
            getAll: getAll
        };
        

        return exports;

        ////////////////

        function getAll() {
            return {
                financialSummary:{
                    text: 'Overall Financial Summary',
                    categories: ['YTD', '2015'],
                    series: [ {
                        name: 'Projected',
                        data:[53102990,52387659],
                        color:"gray"
                    },{
                        name: 'YDT',
                        data: [9367772],
                        color:"red"
                    }]
                },
                Phisyciangroups:{
                        text: 'Phisycian Groups',
                        categories: ['Texas Health Physician Group', 'Genessis Physician Group', 'Uptown Physician Group', 'Healcore Physician Group', 'JefersoMad'],
                         series:   [ {
                                    name: 'Projected',
                                    data:[5324000,4805000,5800000,4600000,4300000],
                                    color:"gray"
                                    },
                                    {
                                    name: 'YDT',
                                    data: [700000,800000,600000,880000,880000],
                                    color:"red",
                                    dataLabels:{
                                        enabled:false
                                    }
                                    }
                         ]
                    } 
                };
            }
        }
    }
})();
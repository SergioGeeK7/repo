(function () {
    'use strict';
    angular
        .module('core')
        .factory('charts', charts);

    charts.$inject = [];

    /* @ngInject */
    function charts(){
        var exports = {
            initCharts: initCharts
        };
        

        return exports;

        ////////////////

        function initCharts() {
            
            
            $('#financial-chart').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Overall Financial Summary'
                },
                 navigation: {
                    buttonOptions: {
                        align: 'center'
                    }
                },
                xAxis: {
                    categories: ['YTD', '2015'],
                    gridLineWidth: 1
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total fruit consumption'
                    },
                    visible:false
                },
                legend: {
                    reversed: true,
                    align: 'left',
                    verticalAlign: 'top',
                    layout: 'horizontal', 
                    x: 20,
                    y: 5
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    },
                    bar: {
                        dataLabels: {
                           enabled: true,
                           align: "right",
                           /*formatter:function (n){

                               return "$"+this.total;
                           }*/
                           format: '${y}'
                        }
                    }
                },
                credits:{
                  enabled:false  
                },
                drilldown: {
                    allowPointDrilldown: false
                },
                series: [ {
                    name: 'Projected',
                    data:[53102990,52387659],
                    color:"gray"
                },{
                    name: 'YDT',
                    data: [9367772],
                    color:"red"
                }
                ]
            });


             $('#physician-groups').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Phisycian Groups'
                },
                 navigation: {
                    buttonOptions: {
                        align: 'center'
                    }
                },
                xAxis: {
                    categories: ['Texas Health Physician Group', 'Genessis Physician Group', 'Uptown Physician Group', 'Healcore Physician Group', 'JefersoMad'],
                    gridLineWidth: 1
                },
                yAxis: {
                    min: 0,
                    visible:false
                },
                legend: {
                    reversed: true,
                    align: 'left',
                    verticalAlign: 'top',
                    layout: 'horizontal', 
                    x: 20,
                    y: 5
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    },
                    bar: {
                        dataLabels: {
                           enabled: true,
                           align: "right",
                           /*formatter:function (n){

                               return "$"+this.total;
                           }*/
                           format: '${y}'
                        }
                    }
                },
                credits:{
                  enabled:false  
                },
                drilldown: {
                    allowPointDrilldown: false
                },
                series:   [ {
                    name: 'Projected',
                    data:[5324000,4805000,5800000,4600000,4300000],
                    color:"gray"
                },{
                    name: 'YDT',
                    data: [700000,800000,600000,880000,880000],
                    color:"red",
                    dataLabels:{
                        enabled:false
                    }

                }
                ]
            });
            
            
            
        }
    }
})();
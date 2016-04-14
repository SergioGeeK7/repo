(function () {
    'use strict';
    angular
        .module('factories')
        .factory('charts', charts);

    charts.$inject = [];

    /* @ngInject */
    function charts(){
        var exports = {
            getAll: getAll,
            configObject:configObject
        };
        

        return exports;

        ////////////////
        
        function getAll(){
            
            var data = getData();
            var configOb = Object
                             .keys(data)
                             .reduce(toConfigObject,{});
            
            return configOb;
            
            function toConfigObject(obj,next){
                obj[next] = configObject(data[next]);
                return obj;
            }
            
        }
        

        function getData() {
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
        
        
         
        function configObject(config){
            
            return {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: config.text,
                    floating: true,
                },
                 navigation: {
                    buttonOptions: {
                        align: 'center'
                    }
                },
                xAxis: {
                    categories: config.categories,
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
                    y: 20
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
                series: config.series
            };
            
        }
        
        
        
        
        }
})();
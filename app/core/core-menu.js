(function () {
    'use strict';

angular
    .module('core')
    .config(menu)
    

function menu (){
    
    
       
    var count = 1;
    
    $('.menu-bar, .btn-open').on("click",(e)=>{
        //$('nav').toggle();
        if(count === 1){
            $("#menu-pledged").animate({
                right:"260px"
            });
            count = 0;
        }else{
            $("#menu-pledged").animate({
                right:"-100%"
            }); 
            count = 1;
        }
    });
    
    
    
    
}

})();
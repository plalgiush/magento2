require([
    'jquery'
], function($) {
     
    $('.resetpage').click(function() {     
        $('body,html').animate({scrollTop:0},800); 
    });

    $('.footer_accordion').click(function() {
        $(this).toggleClass('active');    
    });
});
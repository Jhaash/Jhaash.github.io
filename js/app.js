$(function() {
        $(window).on("load resize",function() {
            $(".fill-screen").css("height",window.innerHeight);
        });
        $('body').scrollspy({ 
            target: '.navbar',
            offset:150
        });
       /* $('nav a').bind('click', function(){
            $($(this).attr('href')).animateScroll({
                scrollSpeed: 2000,padding:50});
                event.preventDefault();
        });*/
    });

    
 
$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 2000,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


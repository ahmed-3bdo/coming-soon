$(function (){
    "use strict";

    // about Us fadin & fadeout
    $('.about-us').on('click', function (){
        $('.about').css({
            animation: 'fadein .4s linear forwards',
        });
    });
    $('.fa-close').on('click', function (){
        $('.about').css({
            animation: 'fadeout .2s linear forwards'
        }, 1000)
    });

    // Counter
    $('.counter').countdown100({
        /*Set Endtime here*/
        /*Endtime must be > current time*/
        endtimeYear: 0,
        endtimeMonth: 0,
        endtimeDate: 39,
        endtimeHours: 19,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
        timeZone: "" 
        // ex:  timeZone: "America/New_York"
        //go to " http://momentjs.com/timezone/ " to get timezone
    });

});
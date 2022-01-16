jQuery(document).ready(function ($) {

    $('.menu-bar').click(function () {
        $(this).toggleClass("click");
        $('nav.sidebar').toggleClass("show");
    });


    $('.feat-btn').click(function () {
        $('nav.sidebar ul .feat-show').toggleClass("show");
        $('nav.sidebar ul .first').toggleClass("rotate");
    });
    
    $('.serv-btn').click(function () {
        $('nav.sidebar ul .serv-show').toggleClass("show1");
        $('nav.sidebar ul .second').toggleClass("rotate");
    });
    
    $('nav.sidebar ul li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



});

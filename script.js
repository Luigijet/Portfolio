$('nav ul li a').click(function(){
    $('html').css('scrollBehavior', "smooth");
});

$('.burger-btn').click(function(){
    $('nav ul').toggleClass("active");
    $('.burger-btn i').toggleClass("active");
})

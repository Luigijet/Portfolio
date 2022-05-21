$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass('sticky');
		}
		else{
			$('.navbar').removeClass('sticky');
		}
	})
});

$('nav ul li a').click(function(){
    $('html').css('scrollBehavior', "smooth");
});

$('.burger-btn').click(function(){
    $('nav ul').toggleClass("active");
    $('.burger-btn i').toggleClass("active");
})

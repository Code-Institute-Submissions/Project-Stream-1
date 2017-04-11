$(document).on("touchstart click", "#item1", function(e) {
	$('#pouches, #cutting, #printing').hide();
    $('#films').slideToggle('slow');
    e.preventDefault();
});

$(document).on("touchstart click", "#item2", function(e) {
    $('#films, #cutting, #printing').hide();
    $('#pouches').slideToggle('slow');
    e.preventDefault();
});

$(document).on("touchstart click", "#item3", function(e) {
    $('#pouches, #films, #printing').hide();
	$('#cutting').slideToggle('slow');
    e.preventDefault();
});

$(document).on("touchstart click", "#item4", function(e) {
   	$('#pouches, #cutting, #films').hide();
  	$('#printing').slideToggle('slow');
    e.preventDefault();
});

$(document).ready(function(){
    $('h1').first().addClass('fadeIn');
    $('p').first().addClass('pFadeIn');
    $('.fadeIn').delay(300).animate({opacity: 1}, 1200);
    $('.pFadeIn').delay(700).animate({opacity: 1}, 1200);
   
});
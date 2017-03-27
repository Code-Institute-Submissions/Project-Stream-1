$(document).on("click touch", "#item1", function() {
	$('#pouches, #cutting, #printing').hide();
    $('#films').slideToggle('slow');
});

$(document).on("click touch", "#item2", function() {
    $('#films, #cutting, #printing').hide();
    $('#pouches').slideToggle('slow');
});

$(document).on("click touch", "#item3", function() {
    $('#pouches, #films, #printing').hide();
	$('#cutting').slideToggle('slow');
});

$(document).on("click touch", "#item4", function() {
   	$('#pouches, #cutting, #films').hide();
  	$('#printing').slideToggle('slow');
});

$(document).ready(function(){
    $('h1').first().addClass('fadeIn');
    $('p').first().addClass('pFadeIn');
    $('.fadeIn').delay(300).animate({opacity: 1}, 1200);
    $('.pFadeIn').delay(700).animate({opacity: 1}, 1200);
   
});
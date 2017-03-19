$(document).ready(function(){
	var leftSide = $('.carousel-arrow-left');
	var rightSide = $('.carousel-arrow-right');

	
	var currentLeftValue = 0;
	var maximumOffset = 0;

	leftSide.click(function(){
		if (currentLeftValue != maximumOffset){
			currentLeftValue += 300;
			$('.carousel-list').animate({left:currentLeftValue+"px"}, 500);
		}
	});

	rightSide.click(function(){
		    currentLeftValue -= 300;
		    $('.carousel-list').animate({left:currentLeftValue+"px"},500);
	});
});
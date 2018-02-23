$(document).ready(function(){
	var width = $(window).width();

	$("#page-arrow-right").click(function(){
		window.scrollBy({
			"behavior": "smooth",
			"left": width/2,
			"top": 0 });
	}); //end arrow right

	$("#page-arrow-left").click(function(){
		window.scrollBy({
			"behavior": "smooth",
			"left": -(width/2),
			"top": 0 });
	}); //end arrow left

	}); //end of doc ready





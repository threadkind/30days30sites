$( document ).ready(function() {

	// hamburger menu
    $("#hamburger").click(function(){
    	$('.hamburger-line').toggleClass("x-out");
    	$('#hamburger-ul').toggleClass("open");
        // $("#hamburger").css("background", "rgba(255,105,180,1)");

    //display courses by category
	$("#all-courses").click(function(){
		$(".food").css("display", "inline-block");
		$(".crafts").css("display", "inline-block");
		$(".other").css("display", "inline-block");
	});

	$("#food-courses").click(function(){
		$(".food").css("display", "inline-block");
		$(".crafts").css("display", "none");
		$(".other").css("display", "none");
	});

	$("#craft-courses").click(function(){
		$(".food").css("display", "none");
		$(".crafts").css("display", "inline-block");
		$(".other").css("display", "none");
	});

	$("#other-courses").click(function(){
		$(".food").css("display", "none");
		$(".crafts").css("display", "none");
		$(".other").css("display", "inline-block");
	});

	    });
});




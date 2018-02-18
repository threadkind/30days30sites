$( document ).ready(function() {
    $("#hamburger").click(function(){
    	$('.hamburger-line').toggleClass("x-out");
    	$('#hamburger-ul').toggleClass("open");
    	// var hamburger = $("hamburger");
    	// var hamburgerDisplay = $("#hamburger-ul").css("display");
    	// if (hamburgerDisplay == "none") {
    	// 	$(hamburger).fadeOut();
    	// 	console.log(hamburgerDisplay);
    	// }

    });
});
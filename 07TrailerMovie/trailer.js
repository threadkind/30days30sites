$(document).ready(function(){

	var viewportWidth = $(window).width();

	var video = document.querySelector("video");
	var isPlaying;
	function playVideo() { 
    		video.play(); 
    		isPlaying = true;
		} 

	function pauseVideo() { 
    		video.pause(); 
    		isPlaying = false;
		} 


	$( ".movieHamburger" ).click(function() {
  		$("#movieHamburgerUl").toggleClass("closed");
  		$("#movieMenu").toggleClass("heightMax");
  		$("#synopsisText").css("display", "none");
  		$("#movieContain").css("display", "none");

  		if(viewportWidth <= 900){
  			if($(".mh1").css("display") == "block"){
  			$(".mh1").css("display", "none");
  			$(".mh2").css("display", "block");
  		}
  		else {
  			$(".mh1").css("display", "block");
  			$(".mh2").css("display", "none");
  		}	
  		}
  		

  		document.querySelector('style').textContent +=
    "@media screen and (min-width:900px) { .mh1, .mh2 {display: none;} }"


});

$("#synopsis" ).click(function() {
  		$("#movieHamburgerUl").toggleClass("closed");
  		$("#movieMenu").removeClass("heightMax");

	if(viewportWidth <= 900){
  		$(".mh1").css("display", "block");
  		$(".mh2").css("display", "none");
  	}
  	else {
  		$("#movieHamburgerUl").css("display", "none");
  		$("#movieMenu").css("width", "100%");
  		$("#movieMenu").css("background", "rgba(0,0,0,0.8)");
  		$("#movieMenu").css("margin-top", "0");
  		$("#movieMenu").css("padding-left", "0");

  	}

  		$("#synopsisText").css("display", "block");
});
if (viewportWidth <= 900){
$("#synopsisText").click(function(){
	$("#synopsisText").css("display", "none");

});
}
$("#trailer").click(function() {
   		$("#movieHamburgerUl").toggleClass("closed");
  		$("#movieMenu").removeClass("heightMax");
	if(viewportWidth <= 900){
  		$(".mh1").css("display", "block");
  		$(".mh2").css("display", "none");
  	}
  	else {
  		$("#movieHamburgerUl").css("display", "none");
  		$("#movieMenu").css("width", "100%");
  		$("#movieMenu").css("background", "rgba(0,0,0,0.8)");
  		$("#movieMenu").css("margin-top", "0");
  	}
  		$("#movieContain").css("display", "block");
  		
		playVideo();
});

$("video").click(function(){
	if (isPlaying === true){
		pauseVideo();
	}
	else {
		playVideo();
	}
});

$("#closeVideo").click(function(){
 	$("#movieContain").css("display", "none");
 	pauseVideo();

 	if(viewportWidth > 900) {
 		$("#movieHamburgerUl").css("display", "block");
		$("#movieMenu").css("width", "25%");
  		$("#movieMenu").css("background", "rgba(0,0,0,0.4)");
  		$("#movieMenu").css("margin-top", "10%");

 	}
});

$(".backArrow").click(function(){
	$("#movieHamburgerUl").css("display", "block");
	$("#movieMenu").css("width", "25%");
	$("#movieMenu").css("margin-top", "10%");
  	$("#movieMenu").css("background", "rgba(0,0,0,0.4)");
  	$("#synopsisText").css("display", "none");


});




});
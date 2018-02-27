$(document).ready(function(){
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

  		if($(".mh1").css("display") == "block"){
  			$(".mh1").css("display", "none");
  			$(".mh2").css("display", "block");
  		}
  		else {
  			$(".mh1").css("display", "block");
  			$(".mh2").css("display", "none");
  		}
});

$("#synopsis" ).click(function() {
  		$("#movieHamburgerUl").toggleClass("closed");
  		$("#movieMenu").removeClass("heightMax");
  		$(".mh1").css("display", "block");
  		$(".mh2").css("display", "none");
  		$("#synopsisText").css("display", "block");
});
$("#synopsisText").click(function(){
	$("#synopsisText").css("display", "none");
});

$("#trailer").click(function() {
   		$("#movieHamburgerUl").toggleClass("closed");
  		$("#movieMenu").removeClass("heightMax");
  		$(".mh1").css("display", "block");
  		$(".mh2").css("display", "none");
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
});





});
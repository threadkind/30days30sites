 

 if (window.innerWidth < 800) {
 	// if ($(".panel1 p").hover(function(){
 	// 	alert('panel1');

 	// });)
 	// }//<800 if end
 	// else {
 	$(".panel").hover(
	//mouse in
	function(){	
		$("p", this).css("height", "65vh");
		$("p", this).css("margin-top", "10vh");
		$("p", this).css("background", "rgba(255, 255, 255, 0.7)");
		$("p", this).css("z-index", "8");
		$("span", this).css("display", "block")
		;},//mouse in end
	//mouse out
	function(){	
		if ($("p", this).parent().hasClass('panel1')){
		  $("p", this).css("margin-top", "80vh");

		}
		else {
		  $("p", this).css("margin-top", "65vh");

		}
		$("p", this).css("height", "auto");
		$("p", this).css("background", "rgba(255, 255, 255, 0.5)");
		$("span", this).css("display", "none")
		;} //mouse out end
	); //hover end
 	// }//<800 else end

  }// <800 end
 else {
    $(".panel").hover(
	//mouse in
	function(){	
		$("p", this).css("height", "80vh");
		$("p", this).css("margin-top", "10vh");
		$("p", this).css("background", "rgba(255, 255, 255, 0.7)");
		$("span", this).css("display", "block")
		;},//mouse in end
	//mouse out
	function(){	
		$("p", this).css("height", "auto");
		$("p", this).css("margin-top", "75vh");
		$("p", this).css("background", "rgba(255, 255, 255, 0.5)");
		$("span", this).css("display", "none")
		;} //mouse out end
	); //hover end
 }





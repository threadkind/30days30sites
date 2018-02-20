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


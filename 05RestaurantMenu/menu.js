$( document ).ready(function() {
    
	$(".food-cat").click(function(){
		console.log(this);
		$(".dish", this).toggleClass("open");
	 });

}); //doc ready end
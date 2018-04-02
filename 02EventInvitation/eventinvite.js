$( document ).ready(function(){

	function openInvitation(){
		$(".invite-details").toggleClass("openInvite");
	}
  
  $(".click").click(function(){
    $(".invite-container").toggleClass("invite-open");
    $(".click").toggleClass("clickHide");
    setTimeout(openInvitation, 500);

    
  });


});


// invite-open
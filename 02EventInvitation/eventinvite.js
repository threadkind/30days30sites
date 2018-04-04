$(document).ready(function(){
  //click on envelope to open invitation
  $(".envelope").click(function(){
    $('.envelope').css({
    height: 'auto',
    width: '80vw',
    transition: 'all 1s'
  });
    $('#click').text('');
    $('.event-details').css({
      visibility: 'visible',
      opacity: 1,
      transition: 'all 1s'
    });
    $('#rsvp').css('display', 'block');
    $('.form-contain').css('display', 'block');
  });//end of envelope click
  
  //click on rsvp button to show form
  $('#rsvp').click(function(){
    if ($('#rsvp').hasClass('rsvp-submit')){
      alert('Thanks! Response Submitted')
    }
    else {
    $('.form-inputs').css('display', 'block');
    $('#rsvp').addClass('rsvp-submit');
    }
  });
  
  //click on rsvp submit button to submit response
  $('.rsvp-submit').click(function(){
      console.log("working");
    // alert($('input[name=attending]:checked', '#form-rsvp').val());
    
  });
});
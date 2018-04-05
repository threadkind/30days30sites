$(document).ready(function(){
  $('#envelope').click(function(){
    $('#content').css({
      gridTemplateColumns : '1fr 8fr 1fr',
      height : 'auto'
    });//content-css end
    $("#click").css('display', 'none');
    $('#event-info').css('display', 'grid');
    $('#envelope').css({
      cursor : 'auto',
      padding : '2%'
    });
  });//envelope click end  
  
  $('#rsvp').click(function(){
    $('form, label, input').css({
      visibility: 'visible',
      fontSize : '1em',
      height : 'auto'
    });//form label input css
    $('#rsvp').css('display', 'none');
    $('#form-contain').css('visibility', 'visible');
    $('#event-address').css('margin-bottom', '20px');
  });//end of rsvp click
  $('#rsvp-submit').click(function(){
    alert('Thanks! Your response has been submitted');
  });
});
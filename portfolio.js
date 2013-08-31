
$(function() {

  $('#contactbutton').on('click', function() {
    $('#maincontainer').fadeOut(900, function() {
      $('#contactinfo').fadeIn().css('display','inline-block');
    });
  });


  $('#contactinfo').on('click', function() {
    $('#contactinfo').fadeOut(900, function() {
      $('#maincontainer').fadeIn();
    });
  });
});

  // $(#containerf).append('<br>')
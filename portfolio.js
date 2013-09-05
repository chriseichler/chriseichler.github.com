
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

$(window).resize(function(){
  if ($(window).width() <= 800){  
    // do something here
    $('#title_section').css("width", "78%");
    $('#title_section').css("left", "11%");
    $('#containere').css("left", "18%");
  } 
});

$(window).resize(function(){
  if ($(window).width() >= 800){  
    // do something here
    $('#title_section').css("width", "40%");
    $('#title_section').css("left", "8%");
    $('#containere').css("left", "13%");
  } 
});

// $(window).resize(function(){
//   if ($(window).width() >= 800){  
//     // do something here
//     $('#title_section').remove('<br />');
//   } 
// });

  // $(#containerf).append('<br>')
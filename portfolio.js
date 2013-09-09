
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


// $('#title_section').click(function() {
//   // inside a jQuery event handler 'this' points to the target element of the event, in this case the a tags.
//   // link = $(this)
//    $('#switcher').attr("background-image", "url(./tracks.jpg)");
// });


// $(function() {

//         $('#switcher').click(function() {
//               $(this).css('background-image', 'url(./tracks.jpg)');
//         });
//                 $('#switcher').click(function() {
//               $(this).css('background-image', 'url(./s_umbrella.jpg)');
//         });
//       });

$(function() {
 $("#switcher").click(function ( event ) {
      $(this).hide();
      $("#switcher2").show();
    });
 $("#switcher2").click(function ( event ) {
      $(this).hide();
      $("#switcher3").show();
     });
   $("#switcher3").click(function ( event ) {
      $(this).hide();
      $("#switcher").show();
    });
});



// $(window).resize(function(){
//   if ($(window).width() >= 800){  
//     // do something here
//     $('#title_section').remove('<br />');
//   } 
// });

  // $(#containerf).append('<br>')
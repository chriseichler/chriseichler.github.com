
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
  if ($(window).width() <= 1000){  
    // do something here
    $('#title_section').css("width", "78%");
    $('#title_section').css("left", "11%");
    $('#containere').css("left", "18%");
    $('#containere').css("margin-top", "10px");
    $('#containere').css("margin-bottom", "21px");
    $('#containerg').css("margin-top", "38px");
  } 
});

$(window).resize(function(){
  if ($(window).width() >= 1000){  
    // do something here
    $('#title_section').css("width", "40%");
    $('#title_section').css("left", "8%");
    $('#containere').css("left", "13%");
    $('#containere').css("margin-top", "0px");
    $('#containere').css("margin-bottom", "5px");
    $('#containerg').css("margin-top", "65px");

  } 
});


// $('#title_section').click(function() {
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
      $("#switcher4").show();
    });
    $("#switcher4").click(function ( event ) {
      $(this).hide();
      $("#switcher5").show();
    });
    $("#switcher5").click(function ( event ) {
      $(this).hide();
      $("#switcher").show();
    });
});

// if (document.getElementById('content2')) {
//   document.getElementById('pics').innerHTML =
// }
// $(selector).hide(speed,callback);
// $(selector).show(speed,callback);
// $('#objectb').click(function(){
//       $('#another-element').toggle('slow');
//   });
// $(document).ready(function(){
//         $("#contactinfo").hide();
//         $("#objectb").show();
//   $('#objectb').click(function(){
//   $("#contactinfo").slideToggle();
//   });
// });
$(function() {

  $('#objectb').on('click', function() {
    $('#maincontainer').fadeOut(1000, function() {
      $('#contactinfo').fadeIn().css('display','inline-block');
    });
  });


  $('#contactinfo').on('click', function() {
    $('#contactinfo').fadeOut(1000, function() {
      $('#maincontainer').fadeIn();
    });
  });
});
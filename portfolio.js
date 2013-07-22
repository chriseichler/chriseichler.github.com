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
  var diag_contact = $('<div title="Email me at:" id="contactinfo"></div>');
  
  diag_contact.dialog({
      autoOpen: false,
      modal: true,
      show: "fadeIn",
      width: '30%',

  });

$('#objectb').on('click', function(){
    $('#maincontainer').fadeOut(1000, function(){$('#contactinfo').fadeIn();});
  });
  $('#contactinfo').on('click', function(){
    $('#contactinfo').fadeOut(1000, function(){$('#maincontainer').fadeIn();});
  });

});
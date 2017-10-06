$(window).resize(function(){
  if ($(window).width() <= 1000){
    // do something here
    $('#title_section1').css("width", "78%");
    $('#title_section1').css("left", "11%");
    $('#containere').css("left", "18%");
    $('#containere').css("margin-top", "10px");
    $('#containere').css("margin-bottom", "21px");
    $('#containerg').css("margin-top", "38px");
  }
});

$(window).resize(function(){
  if ($(window).width() >= 1000){
    // do something here
    $('#title_section1').css("width", "40%");
    $('#title_section1').css("left", "8%");
    $('#containere').css("left", "13%");
    $('#containere').css("margin-top", "0px");
    $('#containere').css("margin-bottom", "5px");
    $('#containerg').css("margin-top", "65px");

  }
});
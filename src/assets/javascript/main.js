$(function() {
  $.getJSON("http://gold-bugle.cloudvent.net/colors.json", function(json) {
    // console.log(JSON.stringify(data));
    var pixel = $('.inner-square').first();
    var color = json.colors[0].hex;
    pixel.css("background-color", color);

  });


  // var json = $.getJSON("http://gold-bugle.cloudvent.net/colors.json");
  // var pixel = document.getElementsByClassName("square")[0];
  // var color = json.colors[0].hex;
  // pixel.css("background-color", color);


});



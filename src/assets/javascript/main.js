$(function () {
  $.getJSON ('http://elegant-bean.cloudvent.net/colors.json', function (json) {
    var colors = json.colors
    var pixels = $('.inner-square')
    var times = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    pixels.each( function( i ){
      $(this).css('background-color', colors[i].hex).delay(times[Math.floor(Math.random() * times.length)]).fadeIn(500);
    })
  })
})



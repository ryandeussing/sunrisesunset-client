$(function () {
  $.getJSON ('http://gold-bugle.cloudvent.net/colors.json', function (json) {
    var colors = json.colors
    var pixels = $('.inner-square')
    pixels.each( function( i ){
      $(this).css('background-color', colors[i].hex)
    })
  })
})



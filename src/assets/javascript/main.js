$.getJSON ('http://elegant-bean.cloudvent.net/colors.json', function (json) {
  var colors = json.colors
  var pixels = $('.inner-square')
  var times = [1000, 2500, 5000, 6000, 7000, 8000, 10000]
  pixels.each( function( i ){
    $(this).append('<p class="mv0 ttu name black-75 absolute">' + colors[i].name + '<p>')
    $(this).css('background-color', colors[i].hex).delay(times[Math.floor(Math.random() * times.length)]).fadeIn(500)
  })
})


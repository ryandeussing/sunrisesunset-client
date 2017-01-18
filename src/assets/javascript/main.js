// setTimeout(waitAsec, 1000)

// function waitAsec () {
//   $.getJSON ('http://elegant-bean.cloudvent.net/colors.json', function (json) {
//     var colors = json.colors
//     var pixels = $('.inner-square')
//     var times = [500, 1000, 1500, 2000]
//     pixels.each( function( i ){
//       var p = document.createElement('p')
//       var txt = colors[i].name
//       $(this).append('<p class="mv0">' + colors[i].name + '<p>');
//       $(this).css('background-color', colors[i].hex).delay(times[Math.floor(Math.random() * times.length)]).fadeIn(500);
//     })
//   })
//  }


$.getJSON ('http://elegant-bean.cloudvent.net/colors.json', function (json) {
  var colors = json.colors
  var pixels = $('.inner-square')
  var times = [500, 1000, 1500, 2000]
  pixels.each( function( i ){
    $(this).append('<p class="mv0 ttu name black-75 absolute">' + colors[i].name + '<p>')
    $(this).css('background-color', colors[i].hex).delay(times[Math.floor(Math.random() * times.length)]).fadeIn(500)
  })
})


$(function() {
  $.getJSON("http://gold-bugle.cloudvent.net/colors.json", function(data) {
    console.log(JSON.stringify(data));
  });
});
// sanity check
console.log("app.js linked");

$(document).ready(function() {

  console.log('you clicked contact me');
  event.preventDefault();
  $('#contact-me-button').on('click', function(event) {
    //shows contact me div
    $('.contact-options').show();
    //sets current position on the page and scrolls down
    var y = $(window).scrollTop();
    $(window).scrollTop(y+200);
  });

});

$('.email-button').on('click', function(event) {
  window.location.href = "mailto:mishaleclair@gmail.com";
});

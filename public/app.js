// sanity check
console.log("app.js linked");

$(document).ready(function() {

  // navbar dropdown
  // $('.dropdown-toggle').dropdown('.dropdown-menu')

  // $('.dropdown-toggle').dropdown('.project-list', function () {
  //   console.log("you clicked the dropdown");
  // })




  // contact me section toggle
  $('#contact-me-button').on('click', function(event) {
    event.preventDefault();
    //shows contact me div
    $('.contact-options').toggle();
    //sets current position on the page and scrolls down
    var y = $(window).scrollTop();
    $(window).scrollTop(y+200);

    $('.email-button').on('click', function(event) {
      window.location.href = "mailto:mishaleclair@gmail.com";
    });
  });

});

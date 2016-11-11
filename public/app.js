// sanity check
console.log("app.js linked");

$(document).ready(function() {

  $('a').on('click', function (event) {
    $(this).toggleClass('active');
  });

  $('.about-me-nav').on('click', function(event) {
    console.log("you clicked about me");
    $('#about-me').toggleClass('active');
    // $('#about-me').show();
    // $("#sitter-swap-container").hide();
    // $('#within-reach-container').hide();
    // $('#protips-container').hide();
    // $('#race-time-container').hide();
  });

  $('.contact-me-nav').on('click', function(event) {
    console.log("you clicked contact me");
      $('#contact-me-section').toggleClass('active');
      // $('#about-me').hide();
      // $('#contact-me-section').show('.contact-options');
      // $("#sitter-swap-container").hide();
      // $('#within-reach-container').hide();
      // $('#protips-container').hide();
      // $('#race-time-container').hide();
  });

  $('.sitter-swap-dropdown').on('click', function(event) {
    console.log("you clicked sitterswap");
    $("#sitter-swap-container").toggleClass('active');
    // $('#about-me').hide();
    // $('#contact-me-section').hide('.contact-options');
    // $("#sitter-swap-container").show();
    // $('#within-reach-container').hide();
    // $('#protips-container').hide();
    // $('#race-time-container').hide();
  });

  $('.within-reach-dropdown').on('click', function(event) {
    console.log("you clicked within reach");
    $('#within-reach-container').toggleClass('active');
    // $('#about-me').hide();
    // $('#contact-me-section').hide('.contact-options');
    // $("#sitter-swap-container").hide();
    // $('#within-reach-container').show();
    // $('#protips-container').hide();
    // $('#race-time-container').hide();
  });

  $('.protips-dropdown').on('click', function(event) {
    console.log("you clicked protips");
    $('#protips-container').toggleClass('active');
    // $('#about-me').hide();
    // $('#contact-me-section').hide('.contact-options');
    // $("#sitter-swap-container").hide();
    // $('#within-reach-container').hide();
    // $('#protips-container').show();
    // $('#race-time-container').hide();
  });

  $('.race-time-dropdown').on('click', function(event) {
    console.log("you clicked race time");
    $('#race-time-container').toggleClass('active');
    // $('#about-me').hide();
    // $('#contact-me-section').hide('.contact-options');
    // $("#sitter-swap-container").hide();
    // $('#within-reach-container').hide();
    // $('#protips-container').hide();
    // $('#race-time-container').show();
  });

  // contact me button toggle
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

  // function active () {
  //   if (active) {
//     this.show();
// } if (!active) {
//   this.hide();
// }
  // }

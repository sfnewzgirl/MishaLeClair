// sanity check
console.log("app.js linked");

$(document).ready(function() {

  $('.about-me-nav').on('click', function(event) {
    console.log("you clicked about me");
  });

  $('.contact-me-nav').on('click', function(event) {
    console.log("you clicked contact me");
      $('#about-me').toggle();
  });

  // $('.project-dropdown-nav').on('click', function(event) {
  //   console.log("you clicked the projecs dropdown");
  // });

  $('.sitter-swap-dropdown').on('click', function(event) {
    console.log("you clicked sitterswap");
    $("#sitter-swap-container").show();
    $('#within-reach-container').hide();
    $('protips-container').hide();
    $('#race-time-container').hide();
  });

  $('.within-reach-dropdown').on('click', function(event) {
    console.log("you clicked within reach");
    $("#sitter-swap-container").hide();
    $('#within-reach-container').show();
    $('protips-container').hide();
    $('#race-time-container').hide();
  });

  $('.protips-dropdown').on('click', function(event) {
    console.log("you clicked protips");
    $("#sitter-swap-container").hide();
    $('#within-reach-container').hide();
    $('protips-container').show();
    $('#race-time-container').hide();
  });

  $('.race-time-dropdown').on('click', function(event) {
    console.log("you clicked race time");
    $("#sitter-swap-container").hide();
    $('#within-reach-container').hide();
    $('protips-container').hide();
    $('#race-time-container').show();
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

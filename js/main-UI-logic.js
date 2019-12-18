$(document).ready(function() {
  //display in grid one
  $(".recipe-one").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-four-details").hide();
    $(".recipe-one-details").slideToggle();
  });
  $(".recipe-two").click(function() {
    $(".recipe-one-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-four-details").hide();
    $(".recipe-two-details").slideToggle();
  });
  $(".recipe-three").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-one-details").hide();
    $(".recipe-four-details").hide();
    $(".recipe-three-details").slideToggle();
  });
  $(".recipe-four").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-one-details").hide();
    $(".recipe-four-details").slideToggle();
  });
  //display in grid two
  $(".recipe-five").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-five-details").slideToggle();
  });
  $(".recipe-six").click(function() {
    $(".recipe-five-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-six-details").slideToggle();
  });
  $(".recipe-seven").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-seven-details").slideToggle();
  });
  $(".recipe-four").click(function() {
    $(".recipe-two-details").hide();
    $(".recipe-three-details").hide();
    $(".recipe-one-details").hide();
    $(".recipe-four-details").slideToggle();
  });
  //display in grid two
  $(".recipe-five").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-five-details").slideToggle();
  });
  $(".recipe-six").click(function() {
    $(".recipe-five-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-six-details").slideToggle();
  });
  $(".recipe-seven").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-five-details").hide();
    $(".recipe-eight-details").hide();
    $(".recipe-seven-details").slideToggle();
  });
  $(".recipe-eight").click(function() {
    $(".recipe-six-details").hide();
    $(".recipe-seven-details").hide();
    $(".recipe-five-details").hide();
    $(".recipe-eight-details").slideToggle();
  });
  //display grid three
  $(".recipe-nine").click(function() {
    $(".recipe-ten-details").hide();
    $(".recipe-eleven-details").hide();
    $(".recipe-twelve-details").hide();
    $(".recipe-nine-details").slideToggle();
  });
  $(".recipe-ten").click(function() {
    $(".recipe-nine-details").hide();
    $(".recipe-eleven-details").hide();
    $(".recipe-twelve-details").hide();
    $(".recipe-ten-details").slideToggle();
  });
  $(".recipe-eleven").click(function() {
    $(".recipe-ten-details").hide();
    $(".recipe-nine-details").hide();
    $(".recipe-twelve-details").hide();
    $(".recipe-eleven-details").slideToggle();
  });
  $(".recipe-twelve").click(function() {
    $(".recipe-ten-details").hide();
    $(".recipe-eleven-details").hide();
    $(".recipe-nine-details").hide();
    $(".recipe-twelve-details").slideToggle();
  });
});

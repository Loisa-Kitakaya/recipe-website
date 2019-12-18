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
});

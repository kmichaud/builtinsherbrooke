$(function() {
  $(window).on("load page:load", function() {
    setTimeout(function() {
      $("html").addClass("loaded");
    }, 200);
  });
});

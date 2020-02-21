$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(".hamburger").toggleClass("open");
  });
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").focus();
  });
  $("#myTabs a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

  $(".progressbar li").on("click", function() {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  $(".showSec").on("click", function() {
    $(".content-estudios").show();
  });
  $(".hideSec").on("click", function() {
    $(".content-estudios").hide();
  });
});

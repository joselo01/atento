$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".hamburger").toggleClass("open");
  });
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").focus();
  });
  $("#myTabs a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

  $(".progressbar li").click(function() {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  $(".showSec").click(function() {
    $(".content-estudios").show();
  });
  $(".hideSec").click(function() {
    $(".content-estudios").hide();
  });
});

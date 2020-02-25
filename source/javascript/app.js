$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(".hamburger").toggleClass("open");
  });
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").focus();
  });
  $("#myModal2").on("show.bs.modal", function(e) {
    $("#myModal").modal("hide");
  });
  $("#myTabs a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

  $(document).on("click", ".progressbar li", function() {
    $("li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", ".progressbar__estado li", function() {
    $("li").removeClass("active_e");
    $(this).addClass("active_e");
  });
  $(document).on("click", ".showSec", function() {
    $(".content-estudios").show();
  });
  $(document).on("click", ".hideSec", function() {
    $(".content-estudios").hide();
  });
});

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".hamburger").toggleClass("open");
  });
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").focus();
  });
});

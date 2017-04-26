$(document).ready(function() {
  $("p").click(function() {
    $("img").show()
  });
});
$(document).ready(function() {
  $("p").click(function() {
    $("walrus-showing").show();
    $("walrus-hidden").hide();
  });
  $(document).ready(function() {
    $("p").click(function() {
      $(".walrus-showing").toggle(3600);
      $(".walrus-hidden").toggle();
    });
  });
});

$("#name-select").val([]);

$('#group-select').change(function() {
  $("#name-select").val([]);
  var group = ("." + $(this).find(":selected").attr('id'));
  $(".option").hide();
  $(group).show();
});

$('#name-select').change(function() {
  var selected = $(this).find(":selected"),
      image = $(selected).data("image"),
      name = $(selected).data("name"),
      status = $(selected).data("status"),
      connection = $(selected).data("connection");
      group = $(selected).data("group"),
      group_joined = group.replace(/ /g, "&nbsp;");
      $("#image-holder").show();
  $("#image-holder").css('background-image', 'url("'+image+'")');
  $('#text-default-holder').hide();
  $('#text-holder-holder').show();
  $("#text-holder-holder .name-holder").html(name);
  $("#text-holder-holder .status-holder").html(status);
  $("#text-holder-holder .connection-holder").html(connection);
  $("#text-holder-holder .group-holder").html(group_joined);

  if ($(".group-holder").html() === "Roman&nbsp;Catholic&nbsp;High") {
    $('.group-holder, #image-holder').css("border-color","rgb(63, 32, 91)");
  }
  if ($(".group-holder").html() === "Penn&nbsp;Charter") {
    $('.group-holder, #image-holder').css("border-color","rgb(245, 211, 81)");
  }
  if ($(".group-holder").html() === "La&nbsp;Salle&nbsp;University") {
    $('.group-holder, #image-holder').css("border-color","rgb(0, 62, 108)");
  }
  if ($(".group-holder").html() === "St.&nbsp;Joseph’s&nbsp;Prep") {
    $('.group-holder, #image-holder').css("border-color","rgb(171, 10, 49)");
  }

});

$( window ).resize(function() {
  var imageW = $("#image-holder ").css("width");
  $("#image-holder").css("height",imageW)});

var imageW = $("#image-holder ").css("width");
$("#image-holder").css("height",imageW)

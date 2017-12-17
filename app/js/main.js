// $(document).ready(function(){
// });

// var degree = 15.6521739;

require('./mobile.js')

var degree = (360/($(".back-splice").length + 7)),
    l = $(".back-splice").length,
    h = (l/2);

$(".back-splice, .front-splice").each(function( index ) {
  console.log(degree);
  $(this).css({
    "-webkit-transform": "rotate("+index*degree+"deg) skewY(-"+(90-12)+"deg)",
    // "-ms-transform": "rotate("+index*degree+"deg) skewY(-"+(90-16)+"deg)",
	  //  "transform": "rotate("+index*degree+"deg) skewY(-"+(90-16)+"deg)",
  });

});

var speedy_img = "http://media.philly.com/storage/inquirer/special project media/speedy/RS944124_speedymorris.jpg";

$( "li" ).hover(
  function() {
    var image = $(this).data("image"),
        name = $(this).data("name"),
        status = $(this).data("status"),
        connection = $(this).data("connection");
        group = $(this).data("group"),
        group_joined = group.replace(/ /g, "&nbsp;");
    $("#img-display").css('background-image', 'url("'+image+'")');
    $('#text-default').hide();
    $('#text-holder').show();
    $("#text-holder .name").html(name);
    $("#text-holder .status").html(status);
    $("#text-holder .connection").html(connection);
    $("#text-holder .group").html(group_joined);

    console.log(group_joined);

    $(this).addClass('active');
    $('li').not(this).addClass('inactive');
    if ($(".group").html() === "Roman&nbsp;Catholic&nbsp;High") {
      $('.group').css("border-color","rgb(63, 32, 91)");
    }
    if ($(".group").html() === "Penn&nbsp;Charter") {
      $('.group').css("border-color","rgb(245, 211, 81)");
    }
    if ($(".group").html() === "La&nbsp;Salle&nbsp;University") {
      $('.group').css("border-color","rgb(0, 62, 108)");
    }
    if ($(".group").html() === "St.&nbsp;Joseph’s&nbsp;Prep") {
      $('.group').css("border-color","rgb(171, 10, 49)");
    }

  }, function() {
    $("#img-display").css({
      "background-image":"url('"+speedy_img+"')"
    });
    $('#text-holder').hide();
    $('#text-default').show();
    $('li').removeClass('active inactive')
  }
);

$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()


$(function(){
  $("#geocomplete").geocomplete({
    map: ".map_canvas",
    details: "form ",
    markerOptions: {
      draggable: true
    }
  });

  $("#geocomplete").bind("geocode:dragged", function(event, latLng){

    $("input[name=lat]").val(latLng.lat());
    $("input[name=lng]").val(latLng.lng());
    $("#reset").show();
  });


  $("#reset").click(function(){
    $("#geocomplete").geocomplete("resetMarker");
    $("#reset").hide();
    return false;
  });

  $("#find").click(function(){
    $("#geocomplete").trigger("geocode");
  }).click();
});


$(function(){
  $("#geocomplete2").geocomplete({
    map: ".map_canvas",
    details: "form2 ",
    markerOptions: {
      draggable: true
    }
  });

  $("#geocomplete2").bind("geocode:dragged", function(event, latLng){

    $("input[name=lat]").val(latLng.lat());
    $("input[name=lng]").val(latLng.lng());
    $("#reset").show();
  });


  $("#reset").click(function(){
    $("#geocomplete2").geocomplete("resetMarker");
    $("#reset").hide();
    return false;
  });

  $("#find2").click(function(){
    $("#geocomplete2").trigger("geocode");
  }).click();
});



});

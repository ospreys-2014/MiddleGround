$(document).ready(function() {

$(function(){
  $("#geocomplete").geocomplete({
    map: "#map-canvas",
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
    map: "#map-canvas",
    details: "form2 ",
    markerOptions: {
      draggable: true
    }
  });

  $("#geocomplete2").bind("geocode:dragged", function(event, latLng){
    $("input[name=lat2]").val(latLng.lat());
    $("input[name=lng2]").val(latLng.lng());
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




var location1 = [];
var location2 = [];
var start;
var end;

$(document).ready(function() {


  // var latLng = new google.maps.LatLng(51.41859298, 0.089179345);
  // console.log(latLng)
  // location2['lng'] = latLng(90);

  $(function(){
    $("#geocomplete").geocomplete({
      map: ".map_canvas",
      details: "form ",
      markerOptions: {
        draggable: true
      }
    });

    $("#geocomplete").bind("geocode:dragged", function(event, latLng){
      location1['lat']=$("input[name=lat]").val(latLng.lat());
      location1['lng']=$("input[name=lng]").val(latLng.lng());
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

  $("#geocomplete2").geocomplete({
      map: ".map_canvas",
      details: "form ",
      markerOptions: {
        draggable: true
      }
    });

    $("#geocomplete2").bind("geocode:dragged", function(event, latLng){
      location2['lat']=$("input[name=lat2]").val(latLng.lat());
      location2['lng']=$("input[name=lng2]").val(latLng.lng());
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




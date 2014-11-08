$(document).ready(function() {

$(function(){
  $("#geocomplete").geocomplete({
    map: "#map-canvas",
    details: "#coordset1",
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
    details: "#coordset2",
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



// var inputLat1 = document.getElementById('lat1').value
// var inputLng1 = document.getElementById('lng1').value
// var inputLat2 = document.getElementById('lat2').value
// var inputLng2 = document.getElementById('lng2').value
//   var directionsDisplay = new google.maps.DirectionsRenderer();
//   var coordinates = new google.maps.LatLng(40.70668, -74);
//   var start = new google.maps.LatLng(40.70668, -74);
//   var end = new google.maps.LatLng(40.70668, -74);
//   var map = new CreateMap(coordinates);
//   map = new google.maps.Map(document.getElementById('map-canvas2'), map.mapOptions);
//   directionsDisplay.setMap(map);
//   var directionsService = new google.maps.DirectionsService();
//   calcRoute(start, end, directionsService, directionsDisplay);
  // var start = coordinates;

  // var end = "gallup, nm";
  // initialize();
  // google.maps.event.addDomListener(window, 'load', initialize);
  

// $( "#route" ).click(function() { calcRoute(start, end, directionsService, directionsDisplay) });


});




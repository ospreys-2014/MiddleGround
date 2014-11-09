function CreateMap(center) {
  this.mapOptions = {
    center: center,
    zoom: 15
  };
}

  function calcRoute(start, end, directionsService, directionsDisplay) {
    console.log('CALCROUTE');
    console.log(start)
    console.log(end)
    var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
      else{

        alert("Wrong Coordinates entered");
        console.log("DESTINATION");
    }
    });
  }

  // JS READY DOCUMENT
$(document).ready(function() {
// var inputLat1 = document.getElementById('lat1').value
// var inputLng1 = document.getElementById('lng1').value
// var inputLat2 = document.getElementById('lat2').value
// var inputLng2 = document.getElementById('lng2').value
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var coordinates = new google.maps.LatLng(40.70668, -74);
  var start = new google.maps.LatLng(40.70668, -74);
  var end = new google.maps.LatLng(40.70668, -74);
  var map = new CreateMap(coordinates);
  map = new google.maps.Map(document.getElementById('map-canvas2'), map.mapOptions);
  directionsDisplay.setMap(map);
  var directionsService = new google.maps.DirectionsService();
  var start = coordinates;

  var end = "gallup, nm";
//   // initialize();
//   // google.maps.event.addDomListener(window, 'load', initialize);
>>>>>>> origin/master
  calcRoute(start, end, directionsService, directionsDisplay);
});
    // var coordinates = {lat: 40.70668, lng: -74}
    // var map1 = new CreateMap(coordinates)
    // var map = new google.maps.Map(document.getElementById('map-canvas'),
    //   map1.mapOptions);




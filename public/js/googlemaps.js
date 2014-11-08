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
  // console.log(location1["hello"]);
  // console.log(location2);

  // location1 = new google.maps.LatLng(40.70668, -64);
  location1['lat'] = 40.70668;
  location1['lng'] = -74.0094;
  location1['noWrap?'] = 'boolean';
  // console.log(location1);
  location2['lat'] = 41.8369;
  location2['lng'] = -87.6847;


  var directionsDisplay = new google.maps.DirectionsRenderer();
  var coordinates = new google.maps.LatLng(40.70668,-74.0094);
  // start = new google.maps.LatLng(location1);
  // end = google.maps.LatLng(location2);
  start = new google.maps.LatLng(location1["lat"],location1["lng"]);
  end = new google.maps.LatLng(location2["lat"],location2["lng"]);

  var map = new CreateMap(location1);
  map = new google.maps.Map(document.getElementById('map-canvas'), map.mapOptions);
  directionsDisplay.setMap(map);
  var directionsService = new google.maps.DirectionsService();
  calcRoute(start, end, directionsService, directionsDisplay);
});
    // var coordinates = {lat: 40.70668, lng: -74}
    // var map1 = new CreateMap(coordinates)
    // var map = new google.maps.Map(document.getElementById('map-canvas'),
    //   map1.mapOptions);




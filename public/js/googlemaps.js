function CreateMap(center) {
  this.mapOptions = {
    center: center,
    zoom: 15
  };
}
var foo;

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

      foo = response;
      console.log(foo)
      return foo;
    }
    else{
      console.log("DESTINATION");
    }

    
  });
}

  // JS READY DOCUMENT
// $(document).ready(function() {
//   var inputLat1 = document.getElementById('lat1').value;
//   var inputLng1 = document.getElementById('lng1').value;
//   var inputLat2 = document.getElementById('lat2').value;
//   var inputLng2 = document.getElementById('lng2').value;
//   var directionsDisplay = new google.maps.DirectionsRenderer();
//   var start = new google.maps.LatLng(inputLat1, inputLng1);
//   var end = new google.maps.LatLng(inputLat2, inputLng2);
//   var map = new CreateMap(start);
//   map = new google.maps.Map(document.getElementById('map-canvas2'), map.mapOptions);
  
//   directionsDisplay.setMap(map);
//   var directionsService = new google.maps.DirectionsService();
//   calcRoute(start, end, directionsService, directionsDisplay);
// });




import $ from 'jquery';

// Google Map
// if HTML DOM Element that contains the map is found
if ($('#map-canvas')){
  // Coordinates to center the map
  var myLatlng = new google.maps
  .LatLng(39.173162100, -77.271650200);
  // Set map options
  var mapOptions = {
    zoom: 9,
    center: myLatlng,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // Attach map to DOM
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  // Place a map marker on the map
  var mapMarker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
}



  // Create the map object with a center and zoom level.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

  let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
  });

  // Pass our map layers into our layers control and add the layers control to the map.
  L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/jmackitty/Mapping_Earthquakes/Mapping_Single_Points/torontoNeighborhoods.json";

// Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/jmackitty/Mapping_Earthquakes/Mapping_Single_Points/torontoRoutes.json";


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data) .addTo(map);

});
  





  // Create the map object with a center and zoom level.

  let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
  };

  let map = L.map('mapid', {
    center: [44, -80],
    zoom: 2,
    layers: [dark]
  });

  // Pass our map layers into our layers control and add the layers control to the map.
  L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/jmackitty/Mapping_Earthquakes/Mapping_Single_Points/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jmackitty/Mapping_Earthquakes/Mapping_Single_Points/torontoRoutes.json";
let myStyle = {
  color: "#ffffa1",
  weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData, function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style:myStyle,
    color: "#ffffa1",
    weight: 2,
    onEachFeature: function(feature, layer){
        layer.bindPopup("<h3> Airline:" + feature.properties.airline +"</h3> <hr><h3> Destination: "
        + feature.properties.dst + "</h3>");
    }
  })
  
  .addTo(map);
});


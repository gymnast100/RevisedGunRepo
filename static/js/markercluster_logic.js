console.log("beginning the map....")
// Creating map object
var myMap = L.map("map", {
  center: [ 37.09, -95.71 ],
    zoom: 3
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
console.log ("minu map")
// csv_file = "static/data/Marker_Cluster_Data_2018.csv"

// Grab the data with d3
// d3.csv(csv_file).then(data => 
 d3.json("http://127.0.0.1:5000/markercluster").then(data => {

  console.log("reading csv.............................")
  console.log(data)
  // Create a new marker cluster group
  // var markers = L.markerClusterGroup();

  // // Loop through data
  // data.forEach( row => {

  //   var lat = row.latitude;
  //   var long = row.longitude;
       
  //   if (lat && long) {

  //     // Add a new marker to the cluster group and bind a pop-up
  //     markers.addLayer(L.marker([lat, long])
  //       .bindPopup(`<h2>State: ${row.state}</h2><hr><h3>City/County: ${row.city_or_county}</h3><h3>Deaths: ${row.n_killed}</h3><h3>Injuries: ${row.n_injured}</h3><h3>Incident Date: ${row.date}</h3><a>${row.incident_url}</a>`));
  //   }

  // })
  
  // // Add our marker cluster layer to the map
  // myMap.addLayer(markers);

}
);

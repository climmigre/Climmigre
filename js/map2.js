var mymap= L.map('mapBox',{

        center: [39.21691137536723, -104.13611149788827],
        scrollWheelZoom: true,
        transparent: false,
        zoom: 3
    });


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

        maxZoom: 20,
        minZoom: 2,

        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',

        id: 'mapbox/streets-v11',

        tileSize: 512,

        zoomOffset: -1

    }).addTo(mymap);


mymap.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'View Fullscreen',
        'true': 'Exit Fullscreen'
    }
}));


$.getJSON("/Climmigre/download/fluxMigratoire.geojson",function(data){
// add GeoJSON layer to the map once the file is loaded
var datalayer = L.geoJson(data ,{
onEachFeature: function(feature, featureLayer) {

var legende = "<strong>Description: </strong>"+ feature.properties.description;

//var legende = (!feature.properties.description) ?  'Pas de nom'  : 'nom : ' + feature.properties.description;

featureLayer.bindPopup(legende);}
}).addTo(mymap);
mymap.fitBounds(datalayer.getBounds());
});

// var latlngs = [
//     [37.12230792103125, 138.9323842017229],
//     [39.87315242654254, -101.88793044559357]
    
    
// ];

// var polyline = new L.Geodesic(latlngs, {color: 'red'}).addTo(mymap);

// // zoom the map to the polyline
// mymap.fitBounds(polyline.getBounds());

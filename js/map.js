var mymap= L.map('mapBox',{

        center: [48.859289, 2.342122],
        scrollWheelZoom: true,
        transparent: true,
        zoom: 2
    });



    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {

        maxZoom: 20,
        minZoom: 2,

        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',

        id: 'mapbox/streets-v11',

        tileSize: 512,

        zoomOffset: -1

    }).addTo(mymap);


$.getJSON("/Climmigre/download/pays.geojson",function(data){
// add GeoJSON layer to the map once the file is loaded
var datalayer = L.geoJson(data ,{
onEachFeature: function(feature, featureLayer) {
featureLayer.bindPopup("catastrophes: " + feature.properties.catastrophe + "<br>" + "informations:" + feature.properties.text);
featureLayer.bindTooltip("catastrophes: " + feature.properties.catastrophe+ "<br>" + "informations:" + feature.properties.text);}
}).addTo(mymap);
mymap.fitBounds(datalayer.getBounds());
});
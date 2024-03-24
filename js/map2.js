var mymap = null;

$("document").ready(function (){
    initializeMap ();
});


function initializeMap() {

mymap= L.map('mapBox',{

        center: [39.21691137536723, -104.13611149788827],
        scrollWheelZoom: true,
        transparent: false,
        zoom: 3
    });


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

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

}

setInterval(function (){
    mymap.invalidateSize();
}, 100);

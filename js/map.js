var mymap= L.map('mapBox',{

        center: [48.859289, 2.342122],
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

//file : https://data.opendatasoft.com/explore/dataset/natural-earth-countries-1_110m%40public/map/?location=2,-7.15664,0.06147&basemap=jawg.streets


$.getJSON("/Climmigre/download/test9.geojson",function(data){
// add GeoJSON layer to the map once the file is loaded
var datalayer = L.geoJson(data ,{
onEachFeature: function(feature, featureLayer) {

var legende = "<h3>";
    legende += feature.properties.pays;
    legende += "</h3><strong>Catastrophes 1 : </strong>";
    legende += feature.properties.catastrophe_1;
    legende += (!feature.properties.description) ? '' : "<br><strong>Description 1 : </strong>" + feature.properties.description;
    legende += (!feature.properties.catastrophe_2) ? '' : "<br><strong>Catastrophes 2 : </strong>" + feature.properties.catastrophe_2;
    legende += (!feature.properties.description_2) ? '' : "<br><strong>Description 2 : </strong>" + feature.properties.description_2;
    legende += (!feature.properties.catastrophe_3) ? '' : "<br><strong>Catastrophes 3 : </strong>" + feature.properties.catastrophe_3;
    legende += (!feature.properties.description_3) ? '' : "<br><strong>Description 3 : </strong>" + feature.properties.description_3;

//var legende = (!feature.properties.description) ?  'Pas de nom'  : 'nom : ' + feature.properties.description;

featureLayer.bindPopup(legende);
featureLayer.bindTooltip(feature.properties.pays);}
}).addTo(mymap);
mymap.fitBounds(datalayer.getBounds());
});

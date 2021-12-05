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


//https://data.opendatasoft.com/explore/dataset/georef-world-country%40public/export/?disjunctive.cntry_code&disjunctive.cntry_name_en&refine.cntry_name_en=Niger&refine.cntry_name_en=Belgium&refine.cntry_name_en=India&refine.cntry_name_en=Nepal&refine.cntry_name_en=South+Sudan&refine.cntry_name_en=Colombia&refine.cntry_name_en=Venezuela&refine.cntry_name_en=United+States+of+America&refine.cntry_name_en=Afghanistan&refine.cntry_name_en=People%27s+Republic+of+China&refine.cntry_name_en=Sri+Lanka&refine.cntry_name_en=South+Africa&refine.cntry_name_en=Bolivia&refine.cntry_name_en=Uruguay&refine.cntry_name_en=Peru&refine.cntry_name_en=Angola&refine.cntry_name_en=Madagascar&refine.cntry_name_en=Thailand&refine.cntry_name_en=Australia&refine.cntry_name_en=Brazil&refine.cntry_name_en=Italy&refine.cntry_name_en=Indonesia&refine.cntry_name_en=Saint+Vincent+and+the+Grenadines&refine.cntry_name_en=Republic+of+the+Congo&refine.cntry_name_en=Haiti&refine.cntry_name_en=Mexico&refine.cntry_name_en=Cuba&refine.cntry_name_en=Nigeria&location=2,18.64625,-14.94141&basemap=jawg.streets


$.getJSON("/Climmigre/download/countries2.geojson",function(data){
// add GeoJSON layer to the map once the file is loaded
var datalayer = L.geoJson(data ,{
onEachFeature: function(feature, featureLayer) {

var legende = "<h3>" + feature.properties.pays + "</h3>"
                + "<strong>Catastrophes 1:</strong>"
                + feature.properties.catastrophe_1
                +"<br><strong>Description 1:</strong>"
                + feature.properties.description
                +"<br><strong>Catastrophes 2:</strong>"
                + feature.properties.catastrophe_2
                +"<br><strong>Description 2:</strong>"
                + feature.properties.description_2
                +"<br><strong>Catastrophes 3:</strong>"
                + feature.properties.catastrophe_3
                +"<br><strong>Description 3:</strong>"
                + feature.properties.description_3;

featureLayer.bindPopup(legende);
featureLayer.bindTooltip(feature.properties.pays);}
}).addTo(mymap);
mymap.fitBounds(datalayer.getBounds());
});

var Mapping=(function(parent, $, L){

    var lm=parent;

    lm.green_style = function green_style(feature) {
        return {
            fillColor: '#b2df8a',
            weight: 2,
            opacity: 1,
            color: '#33a02c',
            fillOpacity: 0.8
        };
    }

    // create map
    lm.addMap=function(lat, lng, zoom){
        
        lm.map= L.map('map', {
            zoom: zoom,
            zoomSnap: 0.2,
            center: [lat, lng],
        });

        // base layer
        var basegrey = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Contains OS data &copy; Crown copyright and database right 2018; tiles &copy; ESRI, Source - ESRI, DeLorme, NAVTEQ'
        }).addTo(lm.map);

        // geojson layer
        lm.green_geojson = L.geoJSON("", {
            style: lm.green_style,
            
        }).addTo(lm.map);

        $.getJSON('/data/ancient_woodland_ox_wgs84.geojson', function (data) {
            lm.green_geojson.addData(data);
        })

        var overlayLayers = {
            "Green spaces": lm.green_geojson,
        };

        var baseLayer = {
            "ESRI Light Grey Base": basegrey
        }; 

        // add layers control
        var layers_control = L.control.layers(
            baseLayer, 
            overlayLayers, 
            {collapsed:true}
        ).addTo(lm.map);

        // add scalebar
        var map_scalebar = L.control.scale().addTo(lm.map);

    }

    return lm;


}(Mapping||{}, jQuery, L)); 

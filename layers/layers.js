var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Limitezonedinervention_0 = new ol.format.GeoJSON();
var features_Limitezonedinervention_0 = format_Limitezonedinervention_0.readFeatures(json_Limitezonedinervention_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitezonedinervention_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limitezonedinervention_0.addFeatures(features_Limitezonedinervention_0);var lyr_Limitezonedinervention_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitezonedinervention_0, 
                style: style_Limitezonedinervention_0,
                title: '<img src="styles/legend/Limitezonedinervention_0.png" /> Limite zone d\'inervention'
            });var format_Degrdedeplac_1 = new ol.format.GeoJSON();
var features_Degrdedeplac_1 = format_Degrdedeplac_1.readFeatures(json_Degrdedeplac_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Degrdedeplac_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Degrdedeplac_1.addFeatures(features_Degrdedeplac_1);var lyr_Degrdedeplac_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Degrdedeplac_1, 
                style: style_Degrdedeplac_1,
    title: 'Degré de deplacé<br />\
    <img src="styles/legend/Degrdedeplac_1_0.png" /> Faible<br />\
    <img src="styles/legend/Degrdedeplac_1_1.png" /> Assez faible<br />\
    <img src="styles/legend/Degrdedeplac_1_2.png" /> Moyenne<br />\
    <img src="styles/legend/Degrdedeplac_1_3.png" /> Fort<br />\
    <img src="styles/legend/Degrdedeplac_1_4.png" /> Très fort<br />'
        });

lyr_Limitezonedinervention_0.setVisible(true);lyr_Degrdedeplac_1.setVisible(true);
var layersList = [baseLayer,lyr_Limitezonedinervention_0,lyr_Degrdedeplac_1];
lyr_Limitezonedinervention_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Sup_Ha': 'Sup_Ha', });
lyr_Degrdedeplac_1.set('fieldAliases', {'NOM': 'NOM', 'Perimetre': 'Perimetre', 'Superficie': 'Superficie', 'PDI': 'PDI', 'PDI_2': 'PDI_2', });
lyr_Limitezonedinervention_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Sup_Ha': 'TextEdit', });
lyr_Degrdedeplac_1.set('fieldImages', {'NOM': 'TextEdit', 'Perimetre': 'TextEdit', 'Superficie': 'TextEdit', 'PDI': 'TextEdit', 'PDI_2': 'TextEdit', });
lyr_Limitezonedinervention_0.set('fieldLabels', {'OBJECTID': 'inline label', 'Nom': 'inline label', 'Sup_Ha': 'inline label', });
lyr_Degrdedeplac_1.set('fieldLabels', {'NOM': 'inline label', 'Perimetre': 'inline label', 'Superficie': 'inline label', 'PDI': 'inline label', 'PDI_2': 'inline label', });
lyr_Degrdedeplac_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
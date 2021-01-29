var wms_layers = [];

var format_District_0 = new ol.format.GeoJSON();
var features_District_0 = format_District_0.readFeatures(json_District_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_0.addFeatures(features_District_0);
var lyr_District_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_0, 
                style: style_District_0,
                interactive: true,
                title: '<img src="styles/legend/District_0.png" /> District'
            });
var format_Major_Towns_1 = new ol.format.GeoJSON();
var features_Major_Towns_1 = format_Major_Towns_1.readFeatures(json_Major_Towns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_Towns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Towns_1.addFeatures(features_Major_Towns_1);
var lyr_Major_Towns_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Major_Towns_1, 
                style: style_Major_Towns_1,
                interactive: true,
                title: '<img src="styles/legend/Major_Towns_1.png" /> Major_Towns'
            });

lyr_District_0.setVisible(true);lyr_Major_Towns_1.setVisible(true);
var layersList = [lyr_District_0,lyr_Major_Towns_1];
lyr_District_0.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_Major_Towns_1.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_District_0.set('fieldImages', {'PROVINCE_N': '', 'Area': '', 'District': '', 'Sinhalese': '', 'SL_Tamils': '', 'Ind_Tamils': '', 'Moor': '', 'Burgher': '', 'Malay': '', 'Other': '', 'Male': '', 'Female': '', 'Pop1963': '', 'Pop1971': '', 'Pop1981_': '', 'Pop2001_': '', 'Pop2012': '', 'Sin_2012': '', 'In_Tam2012': '', 'Sl_Tam2012': '', 'Mus_2012': '', 'Other_2012': '', });
lyr_Major_Towns_1.set('fieldImages', {'ID': '', 'NAME': '', });
lyr_District_0.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_Major_Towns_1.set('fieldLabels', {'ID': 'no label', 'NAME': 'no label', });
lyr_Major_Towns_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
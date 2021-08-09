// V 1.4.2
// layer groups, defining layers
var j1890_1899 = L.layerGroup().addTo(map_friedhof);
var j1916_1925 = L.layerGroup();
var j1990 = L.layerGroup();
var j1938 = L.layerGroup();
var warpermosaic_1374 = L.layerGroup();
var warpermosaic_1377 = L.layerGroup();
var j2008 = L.layerGroup();
var luftbild = L.layerGroup();

// basemaps
var Vermessungskarten_1880_1925 = "https://geodienste.hamburg.de/HH_WMS_Vermessungskarten_1880_1925?";
var Historische_Karte_1_5000 = "https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000?";
var mapwarpermosaic1374 ="https://mapwarper.net/mosaics/wms/1374?";
var mapwarpermosaic1377 ="https://mapwarper.net/mosaics/wms/1377?";
var HamburgDE = "https://geodienste.hamburg.de/HH_WMS_HamburgDE?";
var DOP = "https://geodienste.hamburg.de/HH_WMS_DOP?";
//var DOP_unbelaubt = "https://geodienste.hamburg.de/HH_WMS_DOP?";

L.tileLayer.wms(Vermessungskarten_1880_1925, {
	layers: '3',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist2 + '  &copy; ' + dldeby20,
	maxZoom: 20,
	//style: shift1898,
	className: 'offset1898',
}).addTo(j1890_1899);
L.tileLayer.wms(Vermessungskarten_1880_1925, {
	layers: '0',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist2 + '  &copy; ' + dldeby20,
	maxZoom: 20,
}).addTo(j1916_1925);
L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: '38',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1990);
L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: '8',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1938);
L.tileLayer.wms(mapwarpermosaic1374, {
	layers: 'image',
	format: 'image/png',
	transparent: true,
	attribution: luftbild_nrw_1952 + '  &copy; ' + ccby30de,
	maxZoom: 20,
}).addTo(warpermosaic_1374);
L.tileLayer.wms(mapwarpermosaic1377, {
	layers: 'image',
	format: 'image/png',
	transparent: true,
	attribution: luftbild_nrw_1956 + '  &copy; ' + ccby30de,
	maxZoom: 20,
}).addTo(warpermosaic_1377);
L.tileLayer.wms(HamburgDE, {
	layers: 'Geobasiskarten_HHde',
	format: 'image/png',
	transparent: false,
	attribution: geohhhde + ' &copy; ' + dldeby20,
	maxZoom: 20,
}).addTo(j2008);
var orthophotos = L.tileLayer.wms(DOP, {
	layers: 'DOP',
	format: 'image/png',
	transparent: true,
	attribution: geohhhorthophotos_unbelaubt + ' &copy; ' + dldeby20,
	maxZoom: 20,
}).addTo(luftbild);

// styles
var styleFreistellen = {
	color: "white",
	fillOpacity:"1.0",
	fillColor: "white",
	stroke:false,
};
var styleGrund = {
	color: "darkgrey",
	fillOpacity:"0.0",
	fillColor: "lightgrey",
	weight:1,
};
var styleNothing = {
	fillOpacity:"0.0",
	stroke:false,
};
var styleHaus = {
	color: "black",
	fillOpacity:"1.0",
	fillColor: "lightgrey",
};
var styleZerstoerung1940 = {
	color: "red",
	fillOpacity:"0.3",
};
var styleZerstoerung = {
	color: "red",
	fillOpacity:"1.0",
	fillColor: "#f8adae",
};
var styleZerstoerungFlaechen = {
	color: "black",
	fillOpacity:"1.0",
	fillColor: "#f8adae",
	weight: "1",
};
var styleZerstoerungFlaechenNoborder = {
	color: "black",
	fillOpacity:"0.3",
	fillColor: "red",
	weight: "1",
};
var styleUeberkragung = {
	color: "red",
	fillOpacity:"0.0",
	dashArray: '5, 1, 1',
	weight: "3",
};
var styleUeberkragungMercado = {
	color: "black",
	fillOpacity:"0.0",
	dashArray: '5, 1, 1',
	weight: "2",
};
var styleMercado = {
	color: "black",
	fillOpacity:"0.0",
	weight: "2",
};
var styleFriedhofIntakt = {
	color: "black",
	fillColor: "green",
	fillOpacity:"0.3",
};
var styleFriedhofIntaktFlaeche = {
	stroke:false,
	fillColor: "green",
	fillOpacity:"0.3",
};
var styleFriedhofUeberbaut = {
	color: "black",
	fillOpacity:"0.3",
	fillColor: "blue",
	weight: "1",
};
var styleHintergrund = {
	color: "lightgrey",
	fillOpacity:"0.0",
};

// popup function
function process_popups(feature, layer) {
	var popupContent = [];
	popupContent.push("<div style='margin:0;padding:0;overflow-y:auto;overflow-x:hidden;max-height:200px;'><table><tbody>");	
	for (var key in feature.properties) {
		if(key == "leafletID") {
			var imageID = feature.properties[key];
		}
		if(key == "image_src") {
			var imagesrc = feature.properties[key];
		}
		if(key == "image_src_c") {
			var imagesrcc = feature.properties[key];
		}
		if(key == "name") {
			var imagename = feature.properties[key];
		}
		if(key == "description") {
			var imagedescription = feature.properties[key];
		}
	}
	for (var key in feature.properties) {
		if((feature.properties[key] != null) && (feature.properties[key] != "")) {
			if(key == "name") {
				popupContent.splice(1, 0, "<tr><td colspan=2><strong>" + feature.properties[key] + "</strong></td></tr>");
			}
			else if(key == "label") {
				var nameforlabel = feature.properties[key];
			}
			else if(key == "tooltip") {
				var namefortooltip = feature.properties[key];
			}
			else if(key == "description") {
				popupContent.splice(2, 0, "<tr><td data-bs-toggle='tooltip' title='Bild vergrößern' colspan=2>" + feature.properties[key] + "</td></tr>");
			}
			else if(key == "image_src") {
				popupContent.push("<tr><td colspan=2 style='text-align: center;'><img title='Bild vergrößern' data-bs-toggle='modal' data-bs-target='#" + imageID + "' style='cursor:pointer;' src='https://altona.ws/images/phocagallery/friedhof/thumbs/phoca_thumb_m2_" + feature.properties[key] + "'><br /><span style='font-size:smaller;'>Bildnachweis: " + imagesrcc + "</span></td></tr>");
				 $("#modalsgohere").append("<div class='modal fade' id='" + imageID + "' tabindex='-1' aria-labelledby='Foto' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title'>" + imagename + "</h5><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Schließen'></button></div><div class='modal-body'><p>" + imagedescription + "</p><img style='width:468px;height:auto;' src='https://altona.ws/images/phocagallery/friedhof/thumbs/phoca_thumb_l_" + imagesrc + "'><p style='font-size:smaller;'>Bildnachweis: " + imagesrcc + "</p></div></div></div></div>");
			}
			else if(key == "type") {}
			else if(key == "image_src_c") {}
			else if(key == "leafletID") {}
			else if(key == "building") {}
			else {
				popupContent.splice(2, 0, "<tr><td>" + key + "</td><td>" + feature.properties[key] + "</td></tr>");
			}
		}
	}
	popupContent.push("</tbody></table></div>");
	layer.bindPopup(popupContent.join(""));
	if((nameforlabel != null) && (nameforlabel != "")) {
		layer.bindTooltip(nameforlabel, {permanent:true,direction:'center'}).openTooltip();
	}
	if((namefortooltip != null) && (namefortooltip != "")) {
		layer.bindTooltip(namefortooltip, {permanent:false,direction:'top',sticky:true}).openTooltip();
	}
}

// layer items VOR 1898
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhofgesamt");
	},
	style: styleFriedhofIntakt
}).addTo(j1890_1899);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kapelle");
	},
	style: styleHaus
}).addTo(j1890_1899);

// 1925
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhofbis1934");
	},
	style: styleFriedhofIntakt
}).addTo(j1916_1925);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungrain");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1916_1925);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungbismarckstr");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1916_1925);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kapelle");
	},
	style: styleHaus
}).addTo(j1916_1925);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hirtegebaeudealt");
	},
	style: styleHaus
}).addTo(j1916_1925);

// 1938
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof1940");
	},
	style: styleFriedhofIntakt
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungrain");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungbismarckstr");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "bismarckstrverbreiterung1934");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof1934");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberkragunghirte");
	},
	style: styleUeberkragung
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hirtegebaeudeneu");
	},
	style: styleHaus
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "turmbunker");
	},
	style: styleZerstoerung1940
}).addTo(j1938);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kastenbunkerohne");
	},
	style: styleZerstoerung1940
}).addTo(j1938);

// 1952 / 1956
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof19351940");
	},
	style: styleFriedhofIntaktFlaeche
}).addTo(warpermosaic_1374);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "freiflaechenhirte");
	},
	style: styleFriedhofIntaktFlaeche
}).addTo(warpermosaic_1374);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof19351940");
	},
	style: styleFriedhofIntaktFlaeche
}).addTo(warpermosaic_1377);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "freiflaechenhirte");
	},
	style: styleFriedhofIntaktFlaeche
}).addTo(warpermosaic_1377);

// 1990
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof19351940");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungrain");
	},
	style: styleZerstoerungFlaechen
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungbismarckstr");
	},
	style: styleZerstoerungFlaechen
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "bismarckstrverbreiterung1934");
	},
	style: styleZerstoerungFlaechen
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof1934");
	},
	style: styleFriedhofUeberbaut
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberkragunghirte");
	},
	style: styleUeberkragung
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "goertzohneueberkragung");
	},
	style: styleHaus
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kastenbunkermit");
	},
	style: styleZerstoerung
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "lager");
	},
	style: styleZerstoerung
}).addTo(j1990);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hertie");
	},
	style: styleZerstoerung
}).addTo(j1990);

new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "fundortblumenhof");
	},
	style: styleNothing
}).addTo(j1990);


// seit 1995
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof19351940");
	},
	style: styleFriedhofUeberbaut
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungrain");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungbismarckstr");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "bismarckstrverbreiterung1934");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof1934");
	},
	style: styleFriedhofUeberbaut
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kastenbunkermit");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "zerstoerunglager");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "zerstoerunghertie");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain84");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kapelle");
	},
	style: styleZerstoerungFlaechen
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "anlieferungzufahrt");
	},
	style: styleNothing
}).addTo(j2008);

new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberkragungmercado");
	},
	style: styleUeberkragungMercado
}).addTo(j2008);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "mercadoohneueberkrakung");
	},
	style: styleMercado
}).addTo(j2008);

// Luftbild 2020
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof19351940");
	},
	style: styleFriedhofUeberbaut
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungrain");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ueberwoelbungbismarckstr");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "bismarckstrverbreiterung1934");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhof1934");
	},
	style: styleFriedhofUeberbaut
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kastenbunkermit");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "zerstoerunglager");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "zerstoerunghertie");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain84");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);
new L.GeoJSON.AJAX(["../../geojson/hertiequarree_mercado_friedhof.geojson"], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kapelle");
	},
	style: styleZerstoerungFlaechenNoborder
}).addTo(luftbild);



// legends
var j1890_1899_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Jüdischer Friedhof vor 1897',
		layer:j1890_1899,
		elements: [{
			html:'<p><strong>Hinweis</strong>: Die Karten gehören zu einem längeren Artikel zur Entstehungsgeschichte des <em>Mercados</em>, der im Laufe des Jahres erscheinen wird. Das <a style="text-decoration: underline dashed black" href="../">Mercado</a> wird in einer <a style="text-decoration: underline dashed black" href="../">weiteren Spezialkarte</a> thematisiert.</p><p>Diese Karte zeigt den jüdischen Friedhof in seinem Zustand bis 1897.<br />Die Friedhofskapelle ist <span style="font-weight:bold;">schwarz umrandet</span> eingezeichnet.<br />Für nähere Informationen und ggf. Fotos jew. Objekt anklicken.</p>'
		},{
			html: 'Quellnachweis Grundkarte: ' + geohhhist2_long + ' &copy; ' + dldeby20,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(j1890_1899_legend)
var j1916_1925_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende:  Jüdischer Friedhof 1897-1934',
		layer:j1916_1925,
		elements: [{
			html:'<p>Diese Karte zeigt den jüdischen Friedhof in seinem Zustand von 1897 bis 1934.<br />Die Friedhofskapelle und die Milchhalle (welche später bei der ersten Enteignung eine Rolle spielen wird), sind <span style="font-weight:bold;">schwarz umrandet</span> eingezeichnet.<br />Für die Straßenverbreiterungen überwölbte Flächen sind <span style="font-weight:bold;color:blue;">blau</span> eingezeichnet.<br />Für nähere Informationen und ggf. Fotos jew. Objekt anklicken.</p>'
		},{
			html: 'Quellnachweis Grundkarte: ' + geohhhist2_long + ' &copy; ' + dldeby20,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(j1916_1925_legend)
var j1938_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Jüdischer Friedhof nach 1934',
		layer:j1938,
		elements: [{
			html:'<p>Diese Karte zeigt die Entwicklungen auf dem jüdischen Friedhof zwischen 1935 und 1942.<br />Der Neubau des <em>Kaffees Hirte</em> ist <span style="font-weight:bold;">schwarz umrandet</span> eingezeichnet, wobei die <span style="font-weight:bold;color:darkred;">rot gestrichelte Linie</span> die Überkragung des Hauses über ehemaliges Friedhofsgelände bezeichnet.<br /><span style="font-weight:bold;color:blue;">Blaue Flächen</span> markieren nicht ausgeschachtete, aber vom Friedhof abgetrennte Flächen.<br />Mit <span style="font-weight:bold;color:darkred;">rot</span> sind Gebäude eingezeicnet, für die das Erdreich ausgeschachtet wurde.<br />Für nähere Informationen und ggf. Fotos jew. Objekt anklicken.</p>'
		},{
			html: 'Quellnachweis Grundkarte: ' + geohhhist_long,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(j1938_legend)
var warpermosaic_1374_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Luftbild von 1952',
		layer:warpermosaic_1374,
		elements: [{
			html:'<p>Weiterhin gut erkennbar ist das ehemalige Friedhofsgelände.</p>'
		},{
			html: 'Quellnachweis Grundkarte: ' + luftbild_nrw_1952_long,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(warpermosaic_1374_legend)
var warpermosaic_1377_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Luftbild von 1956',
		layer:warpermosaic_1377,
		elements: [{
			html:'<p>Auch auf dem höher auflösenden Luftbild von 1956 ist das ehemalige Friedhofsgelände trotz Hertie-Neubaus gut zu erkennen.</p>'
		},{
			html: 'Quellnachweis Grundkarte: ' + luftbild_nrw_1956_long,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(warpermosaic_1377_legend)
var j1990_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Das Gelände 1989',
		layer:j1990,
		elements: [{
			html:'<p>Diese Karte zeigt den Zustand des Geländes im Jahre 1989.<br /><em>Görtz</em>, der Nachfolger des <em>Kaffees Hirte</em>, ist <span style="font-weight:bold;">schwarz umrandet</span> eingezeichnet, wobei die <span style="font-weight:bold;color:darkred;">rot gestrichelte Linie</span> die Überkragung des Hauses über ehemaliges Friedhofsgelände bezeichnet.<br /><span style="font-weight:bold;color:blue;">Blau markiert</span> sind möglicherweise nicht ausgeschachtete Flächen.<br />Mit <span style="font-weight:bold;color:darkred;">rot</span> sind Gebäude eingezeicnet, für die das Erdreich ausgeschachtet wurde.<br />Für nähere Informationen und ggf. Fotos jew. Objekt anklicken.</p>'
		},{
			html: 'Quellnachweis: ' + geohhhist,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(j1990_legend)
var j2008_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Seit 1995',
		layer:j2008,
		elements: [{
			html:'<p>Diese Karte zeigt den Zustand des Geländes seit 1995.<br /><span style="font-weight:bold;">Fett schwarz umrandet</span> ist das <em>Mercado</em> eingezeichnet, wobei die <span style="font-weight:bold;">gestrichelte Linie</span> die Überkragung des <em>Mercados</em> über ehemaliges Friedhofsgelände bezeichnet.<br /><span style="font-weight:bold;color:blue;">Blau markiert</span> sind möglicherweise nicht ausgeschachtete Flächen.<br />Mit <span style="font-weight:bold;color:red;">Hellrot</span> sind die Friedhofsflächen eingezeichnet, die mit Sicherheit zerstört wurden.<br />Für nähere Informationen und ggf. Fotos jew. Objekt anklicken.</p>'
		},{
			html: 'Quellnachweis: ' + geohhhist,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(j2008_legend)

var luftbild_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Luftbild von 2020',
		layer:luftbild,
		elements: [{
			html:'<p>Möglicherweise nicht ausgeschachtete Flächen sind <span style="font-weight:bold;color:blue;">bläulich markiert</span>.<br /><span style="font-weight:bold;color:red;">Rötlich</span> sind die Friedhofsflächen eingezeichnet, die mit Sicherheit zerstört wurden.</p>'
		},{
			html: 'Quellnachweis: ' + geohhhist,
		}]
	}],
	collapseSimple: true,
	detectStretched: true,
	collapsedOnInit: false,
	defaultOpacity: 1.0,
	visibleIcon: 'icon icon-eye',
	hiddenIcon: 'icon icon-eye-slash',
	toggleIcon: false,
	disableVisibilityControls: true
})
map_friedhof.addControl(luftbild_legend)



var basemaps = {
	"vor 1897": j1890_1899,
	"1897-1934": j1916_1925,
	"nach 1934": j1938,
	"1952 (Luftbild)": warpermosaic_1374,
	"1956 (Luftbild)": warpermosaic_1377,
	"bis 1989": j1990,
	"seit 1995": j2008,
	"2020 (Luftbild)": luftbild,
};
L.control.scale(basemaps).addTo(map_friedhof);
var Overlays = {};
L.control.layers(basemaps, Overlays, {collapsed: false, position: 'topleft'}).addTo(map_friedhof);

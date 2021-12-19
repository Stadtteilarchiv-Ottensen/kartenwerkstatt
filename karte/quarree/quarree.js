// Version 1.3.0
// layer groups, defining layers
var j1990 = L.layerGroup().addTo(map_quarree);
var j1990planung = L.layerGroup();
var j1990aktionen = L.layerGroup();
var j1991vorschlag1 = L.layerGroup();
var j1992vorschlag2 = L.layerGroup();
var j2008 = L.layerGroup();
var luftbild = L.layerGroup();
var terrestris = L.layerGroup();

// basemaps
var Historische_Karte_1_5000 = "https://geodienste.hamburg.de/HH_WMS_Historische_Karte_1_5000?";
var HamburgDE = "https://geodienste.hamburg.de/HH_WMS_HamburgDE?";
var DOP_belaubt = "https://geodienste.hamburg.de/HH_WMS_DOP_belaubt?";
var terrestris_wms = "https://ows.terrestris.de/osm-gray/service?";

var geojson_address = "../geojson/hertiequarree_mercado_friedhof.geojson";
var geojson_address_ereignisse = "../geojson/hertiequarree_orte_ereignisse.geojson";

L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: 'Jahrgang_1980-1990',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1990);
L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: 'Jahrgang_1980-1990',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1990planung);
L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: 'Jahrgang_1980-1990',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1990aktionen);
L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: 'Jahrgang_1980-1990',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1991vorschlag1);
L.tileLayer.wms(Historische_Karte_1_5000, {
	layers: 'Jahrgang_1980-1990',
	format: 'image/png',
	transparent: true,
	attribution: geohhhist,
	maxZoom: 20,
}).addTo(j1992vorschlag2);
L.tileLayer.wms(HamburgDE, {
	layers: 'Geobasiskarten_HHde',
	format: 'image/png',
	transparent: false,
	attribution: geohhhde + ' &copy; ' + dldeby20,
	maxZoom: 20,
}).addTo(j2008);
var orthophotos = L.tileLayer.wms(DOP_belaubt, {
	layers: 'DOP_belaubt',
	format: 'image/png',
	transparent: true,
	attribution: geohhhorthophotos + ' &copy; ' + dldeby20,
	maxZoom: 20,
}).addTo(luftbild);
var terrestris = L.tileLayer.wms(terrestris_wms, {
	layers: 'OSM-WMS',
	format: 'image/png',
	transparent: true,
	attribution: osmattrib,
	maxZoom: 20,
}).addTo(terrestris);

// styles
var styleFreistellen = {
	color: "white",
	fillOpacity:"1.0",
	fillColor: "white",
	stroke:false,
};
var styleGrund = {
	color: "grey",
	fillOpacity:"0.3",
	fillColor: "orange",
};
var styleNothing = {
	fillOpacity:"0.0",
	stroke:false,
};
var styleAbriss = {
	color: "red",
	fillOpacity:"0.0",
	fillColor: "white",
};
var styleGoertz = {
	color: "black",
	fillOpacity:"1.0",
	fillColor: "white",
};
var styleHaus = {
	color: "black",
	fillOpacity:"0.0",
	fillColor: "grey",
};
var styleHertie = {
	color: "blue",
	fillOpacity:"0.2",
	fillColor: "red",
};
var styleBaederland = {
	color: "#00498c",
	fillOpacity:"0.0",
};
var styleFriedhofIntakt = {
	color: "green",
	stroke:false,
	fillOpacity:"0.3",
};
var styleFriedhofIntaktNoTransparency = {
	color: "#b3d9b3",
	stroke:false,
	fillOpacity:"1.0",
};
var styleNeubau = {
	color: "red",
	stroke:false,
	fillOpacity:"0.3",
	fillColor: "blue",
};
var styleAbrundung = {
	color: "gray",
	fillColor: "blue",
	weight:"1",
	fillOpacity:"0.3",
};
var styleGefaehrdet = {
	color: "darkorange",
	fillOpacity:"0.0",
};
var styleHintergrund = {
	color: "lightgrey",
	fillOpacity:"0.0",
};
var styleMercadoDick = {
	color: "red",
	fillOpacity:"0.0",
	fillColor: "white",
	weight:5,
};
var styleHertiezufahrt = {
	color: "black",
	fillOpacity:"0.0",
	dashArray: '4, 2, 1',
	weight: "2",
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
		if(key == "orteereignisse") {
			var orteereignisse = 1;
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
			else if(key == "description") {
				popupContent.splice(2, 0, "<tr><td data-bs-toggle='tooltip' title='Bild vergrößern' colspan=2>" + feature.properties[key] + "</td></tr>");
			}
			else if(key == "image_src") {
				popupContent.push("<tr><td colspan=2 style='text-align: center;'><img title='Bild vergrößern' data-bs-toggle='modal' data-bs-target='#" + imageID + "' style='cursor:pointer;' src='" + url_path_quarree_images + "phoca_thumb_m2_" + feature.properties[key] + "'><br /><span style='font-size:smaller;'>Bildnachweis: " + imagesrcc + "</span></td></tr>");
				 $("#modalsgohere").append("<div class='modal fade' id='" + imageID + "' tabindex='-1' aria-labelledby='Foto' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title'>" + imagename + "</h5><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Schließen'></button></div><div class='modal-body'><p>" + imagedescription + "</p><img style='width:468px;height:auto;' src='" + url_path_quarree_images + "phoca_thumb_l_" + imagesrc + "'><p style='font-size:smaller;'>Bildnachweis: " + imagesrcc + "</p></div></div></div></div>");
			}
			else if(key == "type") {}
			else if(key == "image_src_c") {}
			else if(key == "leafletID") {}
			else if(key == "building") {}
			else if(key == "orteereignisse") {}
			else {
				popupContent.splice(2, 0, "<tr><td>" + key + "</td><td>" + feature.properties[key] + "</td></tr>");
			}
		}
	}
	popupContent.push("</tbody></table></div>");
	layer.bindPopup(popupContent.join(""));
	if((nameforlabel != null) && (nameforlabel != "")) {
		if(orteereignisse) {
			layer.bindTooltip(nameforlabel, {permanent:true,direction:'top',className:'labelorteereignisse'}).openTooltip();
			delete orteereignisse;
		}
		else {
			layer.bindTooltip(nameforlabel, {permanent:true,direction:'center'}).openTooltip();
		}
	}
}

// layer items AUSGANGSLAGE
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "blumenhof");
	},
	style: styleGrund
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "gewerbehinterrain");
	},
	style: styleGrund
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hertieflaechenaussen");
	},
	style: styleGrund
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "goertzgelaende");
	},
	style: styleGrund
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "bismarckbad");
	},
	style: styleBaederland
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kastenbunkermit");
	},
	style: styleHaus
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "goertz");
	},
	style: styleGoertz
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hertiezufahrt");
	},
	style: styleHertiezufahrt
}).addTo(j1990);
var imageVerkaufUrl = 'images/verkauf_modifiziert.png';
var imageVerkaufBounds = [[53.5521814497417594, 9.9312440779717956], [53.5527258750721415, 9.9327163687803033]];
L.imageOverlay(imageVerkaufUrl, imageVerkaufBounds, {attribution: stadtteilarchiv}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hertie");
	},
	style: styleHertie
}).addTo(j1990);
var imageLagerUrl = 'images/lager_modifiziert.png';
var imageLagerBounds = [[53.5529102550679070, 9.9313021124379492], [53.5535855613405118, 9.9325658712853908]];
L.imageOverlay(imageLagerUrl, imageLagerBounds, {attribution: stadtteilarchiv}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "lager");
	},
	style: styleHertie
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ottenserhaupt18");
	},
	style: styleHaus
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ottenserhaupt20alt");
	},
	style: styleHaus
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain8");
	},
	style: styleHaus
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain1216");
	},
	style: styleHaus
}).addTo(j1990);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain40");
	},
	style: styleHaus
}).addTo(j1990);

// PLANUNG
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "blumenhof");
	},
	style: styleAbriss
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "quarree");
	},
	style: styleNothing
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "anlieferungzufahrt");
	},
	style: styleNothing
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "einhausung");
	},
	style: styleNothing
}).addTo(j1990planung);
var imagePlanung1 = 'images/planungflach.png';
var imagePlanung1Bounds = [[53.5517547852595683, 9.9303147197106121], [53.5538241599389266, 9.9340224896372433]];
L.imageOverlay(imagePlanung1, imagePlanung1Bounds, {attribution: stadtteilarchiv}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "abrundung");
	},
	style: styleAbrundung
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ottenserhaupt18");
	},
	style: styleGefaehrdet
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ottenserhaupt20alt");
	},
	style: styleGefaehrdet
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain8");
	},
	style: styleGefaehrdet
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain1216");
	},
	style: styleGefaehrdet
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "goertz");
	},
	style: styleAbriss
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "hertie");
	},
	style: styleAbriss
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain40");
	},
	style: styleAbriss
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "lager");
	},
	style: styleAbriss
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "kastenbunkermit");
	},
	style: styleAbriss
}).addTo(j1990planung);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "rain84");
	},
	style: styleHaus
}).addTo(j1990planung);

// Ereignisse & Orte
var imageAktionen = 'images/planunghoch.png';
var imageAktionenBounds = [[53.5518532848018012, 9.9304532438624626], [53.5538973659055841, 9.9340147223373449]];
L.imageOverlay(imageAktionen, imageAktionenBounds, {attribution: stadtteilarchiv}).addTo(j1990aktionen);
new L.GeoJSON.AJAX([geojson_address_ereignisse], {
	onEachFeature: process_popups,
}).addTo(j1990aktionen);

var imageAktionen = 'images/alternativvorschlag1.png';
var imageAktionenBounds = [[53.5521318417179870, 9.9305160901885845], [53.5537838604333487, 9.9336813073576575]];
L.imageOverlay(imageAktionen, imageAktionenBounds, {attribution: stadtteilarchiv}).addTo(j1991vorschlag1);

// 2. Gegenvorschlag
new L.GeoJSON.AJAX(["../geojson/hertiequarree_mercado_friedhof.geojson"], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "friedhofgesamt");
	},
	style: styleFriedhofIntaktNoTransparency,
	zIndex: "-999",
}).addTo(j1992vorschlag2);
var imageAktionen = 'images/alternativvorschlag2.png';
var imageAktionenBounds = [[53.5518319097043758, 9.9306208379831471], [53.5539387672609593, 9.9336456369884942]];
L.imageOverlay(imageAktionen, imageAktionenBounds, {attribution: stadtteilarchiv, zIndex: 9999, className:"ontop"}).addTo(j1992vorschlag2);

// Geworden
new L.GeoJSON.AJAX([geojson_address], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "mercadoheute");
	},
	style: styleFreistellen
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ottenserhaupt20neu");
	},
	style: styleHintergrund
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "fahrradhof");
	},
	style: styleHintergrund
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "einhausung");
	},
	style: styleHintergrund
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "geschaeftshausottensen");
	},
	style: styleHintergrund
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "mercadoheute");
	},
	style: styleMercadoDick
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "ottenserhaupt20neu");
	},
	style: styleNothing
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "fahrradhof");
	},
	style: styleNothing
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "einhausung");
	},
	style: styleNothing
}).addTo(j2008);
new L.GeoJSON.AJAX([geojson_address], {
	onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "geschaeftshausottensen");
	},
	style: styleNothing
}).addTo(j2008);

// Parkplätze
var pp496 = L.icon({
    iconUrl: 'images/496.png',
    iconSize:     [48, 67],
    iconAnchor:   [24, 67],
    popupAnchor:  [0, 0],
    className: 'ppicon'
});
var pp400 = L.icon({
    iconUrl: 'images/400.png',
    iconSize:     [48, 67],
    iconAnchor:   [24, 67],
    popupAnchor:  [0, 0],
    className: 'ppicon'
});
var pp77 = L.icon({
    iconUrl: 'images/77.png',
    iconSize:     [48, 67],
    iconAnchor:   [24, 67],
    popupAnchor:  [0, 0],
    className: 'ppicon'
});
var pp54 = L.icon({
    iconUrl: 'images/54.png',
    iconSize:     [48, 67],
    iconAnchor:   [24, 67],
    popupAnchor:  [0, 0],
    className: 'ppicon'
});
L.marker([53.5527413, 9.9340355], {icon: pp496}).addTo(j2008).bindTooltip("Parkhaus Bf. Altona", {direction:'bottom'}); // .openTooltip();
L.marker([53.5532098, 9.9324292], {icon: pp400}).addTo(j2008).bindTooltip("Parkhaus Mercado", {direction:'bottom'});
L.marker([53.5529644, 9.9331427], {icon: pp77}).addTo(j2008).bindTooltip("Parkhaus Hahnenkamp", {direction:'bottom'});
L.marker([53.5524481, 9.9306482], {icon: pp54}).addTo(j2008).bindTooltip("Tiefgarage Ottenser Hauptstraße 20", {direction:'bottom'});

// Luftbild
new L.GeoJSON.AJAX([geojson_address], {
	//onEachFeature: process_popups,
	filter: function(feature, layer) {
		return (feature.properties.leafletID === "mercadoheute");
	},
	style: styleMercadoDick
}).addTo(luftbild);

// legends
var j1990_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Ausgangslage 1989',
		layer:j1990,
		elements: [{
			html:'<p><strong>Hinweis</strong>: Die Karten gehören zu einem längeren Artikel zur Entstehungsgeschichte des <em>Mercados</em>, der im Laufe des Jahres erscheinen wird. Der <a style="text-decoration: underline dashed black" href="friedhof">jüdische Friedhof</a> wird in einer <a style="text-decoration: underline dashed black" href="friedhof">weiteren Spezialkarte</a> thematisiert.</p><p>Diese Karte zeigt das Gelände in seinem Zustand 1989. <span style="color:red;font-weight:bold;">H</span><span style="color:blue;font-weight:bold;">ertie</span>, <span style="color:white;background-color:black;font-weight:bold;padding:0 0 0 3px;">G</span><span style="color:red;background-color:black;font-weight:bold;">ö</span><span style="color:white;background-color:black;font-weight:bold;padding:0 3px 0 0;">rtz</span> und <span style="background-color:#00498c;color:white;padding:0 3px 0 3px;font-weight:bold;">bäderland</span>-Bismarckbad sind mit ihren ungefähren Logofarben eingezeichnet. Weitere Gebäude und Flächen, die von den Planungen zum <em>Quarree</em> (dem späteren <em>Mercado</em>) betroffen sind, werden <span style="font-weight:bold;">grau</span> bzw. <span style="font-weight:bold;">schwarz</span> umrandet dargestellt.<br />Für nähere Informationen und ggf. Fotos jew. Objekt anklicken.</p>'
		},{
			html: 'Quellnachweis Gebäudegrundrisse: ' + stadtteilarchiv_long + '. Die Grafiken wurden leicht bearbeitet, damit sie in die Karte passen.',
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
map_quarree.addControl(j1990_legend)
var j1990planung_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Aufschlüsselung der Planungen zum Quarree',
		layer:j1990planung,
		elements: [{
		
			html:'<p>Diese Karte verdeutl­icht die Pla­nung­en zum <em>Quarree</em>, dem späteren <em>Mercado</em>.<br />Die Skizze stellt die ge­plante Aus­dehnung des <em>Quarrees</em> in der bereits etwas abgespeckten Version von 1989 dar.<br /><span style="color:darkred;font-weight:bold;">Rot um­ran­dete Objekte</span> sol­len ab­ge­ris­sen wer­den.<br />Die <span style="color:blue;font-weight:bold;">blaue Fläche</span> markiert das Eck Gr. Rain­str. / Ot­tenser Haupt­str., wel­ches offen­sicht­lich für eine Er­wei­terung ("Ab­run­dung") des <em>Quarrees</em> ein­ge­plant war.<br />Die <span style="color:OrangeRed;font-weight:bold;">orange um­ran­deten Häuser</span> wur­den 1990/91 vom Quarree-In­vestor auf­ge­kauft.<br />Für nähere In­formation­en und ggf. Fo­tos jew. Objekt an­klicken.</p>'
		},{
			html: 'Quellnachweis Planunggskizze: Architekten Gerkan, Marg & Partner, ' + stadtteilarchiv_long + '. Die Grafik wurde leicht bearbeitet, damit sie in die Karte passt.',
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
map_quarree.addControl(j1990planung_legend)
var j1990aktionen_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Ereignisse & Orte 1989-2007',
		layer:j1990aktionen,
		elements: [{
			html:'<p>Diese Karte befindet sich noch im Aufbau. In der nächsten Zeit werden hier Orte und Ereignisse eingezeichnet, die im Konflikt um das <em>Hertie-Quarree / Mercado</em> eine Rolle spielten, wie etwa Protestaktionen, politische Veranstaltungen usw. Nach Möglichkeit werden die Einträge mit entsprechenden Beschreibungstexten und Fotos versehen. Da die Punkte etwas weiter verstreut liegen, empfehle ich für einen ersten Überblick hier die <strong>Zoomstufe 15</strong>.</p>'
		},{
			html: 'Quellnachweis Planunggskizze: Architekten Gerkan, Marg & Partner, ' + stadtteilarchiv_long + '. Die Grafik wurde leicht bearbeitet, damit sie in die Karte passt.',
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
map_quarree.addControl(j1990aktionen_legend)
var j1991vorschlag1_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: 1. Alternativvorschlag 1991',
		layer:j1991vorschlag1,
		elements: [{
			html:'<p>Der Entwurf der u.g. Architekten und der Anwohnerinitiative sieht eine Mischbebauung 2/3 Wohnungen und 1/3 kleinerem Gewerbe auf insgesamt 30.000qm sowie lediglich 130 Anwohnerparkplätze vor. Die <span style="color:blue;font-weight:bold;">Gr. Rainstr. 40</span> soll erhalten bleiben.</p>'
		},{
			html: 'Quellnachweis Planunggskizze: Planungsgruppe Barthel & Schlüter, 08/1991, ' + stadtteilarchiv_long + '. Die Grafik wurde leicht bearbeitet, damit sie in die Karte passt. Die farblichen Hervorhebungen stammen vom Autor der Karte.',
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
map_quarree.addControl(j1991vorschlag1_legend)
var j1992vorschlag2_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: 2. Alternativvorschlag 1992',
		layer:j1992vorschlag2,
		elements: [{
			html:'<p>Der Alternativvorschlag vom Mai 1992 sieht vorwiegende Wohnbebauung mit dem Erhalt der <span style="color:blue;font-weight:bold;">Gr. Rainstr. 40</span> sowie der <span style="color:green;font-weight:bold;">Wiederherstellung des Friedhofs</span> in seiner Fläche vor 1898 (ohne Görtz) vor. Siehe auch die <a style="text-decoration: underline dashed black" href="friedhof">Spezialkarte zum jüdischen Friedhof</a>.</p>'
		},{
			html: 'Quellnachweis Skizze: ' + stadtteilarchiv_long + '. Die Grafik wurde leicht bearbeitet, damit sie in die Karte passt.',
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
map_quarree.addControl(j1992vorschlag2_legend)
var j2008_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Mercado seit 2008',
		layer:j2008,
		elements: [{
			html:'<p>Die <span style="color:darkred;font-weight:bold;">rote Umrandung</span> bezeichnet das <em>Mercado</em> in seiner heutigen Ausdehnung. In der Mitte erkennbar ist das <em>Mercado</em> in seiner ursprünglichen Größe von 1995.<br />Außerdem wird das "<span style="color:darkblue;font-weight:bold;">reichhaltige Parkplatzangebot</span>" gekennzeichnet.<br />Der heutige Investor <em>Union Investment</em> hält außerdem die Immobilien Ottenser Hauptstraße 17 und ein Geschäftshaus in der Bahrenfelder Straße sowie "Shopping Bahnhof Altona".<br />Für nähere In­formation­en und ggf. Fo­tos jew. Objekt an­klicken.</p>'
		},{
			html: 'Quellnachweis Grundkarte: ' + geohhhde_long + ' &copy; ' + dldeby20,
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
map_quarree.addControl(j2008_legend)
var luftbild_legend = L.control.htmllegend({
	position: 'bottomright',
	legends: [{
		name: 'Legende: Luftbild Mercado 2020',
		layer:luftbild,
		elements: [{
			html:'<p>Die <span style="color:darkred;font-weight:bold;">rote Umrandung</span> bezeichnet das <em>Mercado</em> in seiner heutigen Ausdehnung.'
		},{
			html: 'Quellnachweis Luftbild: ' + geohhhorthophotos_long,
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
map_quarree.addControl(luftbild_legend)

var basemaps = {
	//"Aus": terrestris,
	"Ausgangslage 1989": j1990,
	"Planung des Quarrees": j1990planung,
	"Ereignisse & Orte 1989-2007": j1990aktionen,
	"1. Alternativvorschlag 1991": j1991vorschlag1,
	"2. Alternativvorschlag 1992": j1992vorschlag2,
	"Mercado seit 2008": j2008,
	"Luftbild 2020": luftbild,
};
L.control.scale(basemaps).addTo(map_quarree);
var Overlays = {};
L.control.layers(basemaps, Overlays, {collapsed: false, position: 'topleft'}).addTo(map_quarree);
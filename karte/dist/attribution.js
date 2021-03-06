// attribution
var osm =  '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>-Mitwirkende';
var osmattrib = '&copy; ' + osm + ' (Karte)';
var osm_odbl = ' &copy; <a href="https://opendatacommons.org/licenses/odbl/1-0/" title="Open Database Licence (ODbL) 1.0" target="_blank" data-bs-placement="left" data-bs-toggle="popover">ODbL 1.0</a> (Daten)';
var wikiattrib = '<a href="https://de.wikipedia.org/wiki/Wikipedia:Lizenzbestimmungen" target="_blank">Wikipedia</a> &copy; <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.de" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="Namensnennung – Weitergabe unter gleichen Bedingungen – 3.0 Unported">CC BY-SA 3.0</a> ';
var dldeby20 = '<a href="https://www.govdata.de/dl-de/by-2-0" data-bs-placement="left" data-bs-toggle="popover" title="Datenlizenz Deutschland – Namensnennung – Version 2.0" target="_blank">dl-de-by/2.0</a>';
var ccby30de = '<a target="_blank"  data-bs-placement="left" data-bs-toggle="popover" title="Namensnennung 3.0 Deutschland" href="https://creativecommons.org/licenses/by/3.0/de/deed.de">CC BY 3.0 DE</a>';
var ccbysa40 = '<a target="_blank"  data-bs-placement="left" data-bs-toggle="popover" title="Namensnennung — Weitergabe unter gleichen Bedingungen — 4.0 International" href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0</a>';
var public_domain = '<a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="CC0 1.0 Universell (CC0 1.0) – Public Domain Dedication" href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">CC0 1.0</a>';
var public_domain_mark = '<a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="Public Domain Mark 1.0" href="https://creativecommons.org/publicdomain/mark/1.0/deed.de">gemeinfrei</a>';
var vorbehalten ='alle Rechte vorbehalten';
var geohhhde_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=BE0E4C23-ACFE-4D40-838F-503D8BC1BEF5&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhde_title ='Freie und Hansestadt Hamburg, Landesbetrieb Geoinformation und Vermessung';
var geohhhde_long = '<a href="' + geohhhde_url + '" target="_blank">' + geohhhde_title + '</a>';
var geohhhde = '<a href="' + geohhhde_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhde_title + '">LGV HH</a>';
var geohhhbasis_gb_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=BE8E6014-60AD-4FD4-BE99-2FD8D75E0BDE&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhbasis_gb_long = '<a href="' + geohhhbasis_gb_url + '" target="_blank">' + geohhhde_title + '</a>';
var geohhhbasis_gb = '<a href="' + geohhhbasis_gb_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhde_title + '">LGV HH</a>';
var geohhhdk5_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=84BF7263-E92C-45BE-9D4D-21CB48AD5D88&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhdk5_long = '<a href="' + geohhhdk5_url + '" target="_blank">' + geohhhde_title + '</a>';
var geohhhdk5 = '<a href="' + geohhhdk5_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhde_title + '">LGV HH</a>';
var geohhhist_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=7CF3384C-6709-4169-A048-2ADA6112A804&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhist_title = geohhhde_title + ' – nur nichtkommerzielle Nutzung';
var geohhhist_long = '<a href="' + geohhhist_url + '" target="_blank">' + geohhhist_title + '</a>';
var geohhhist = '&copy; <a href="' + geohhhist_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhist_title + '">LGV HH – nur nichtkommerziell</a>';
var geohhhist2_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=46C07D63-8B17-48F7-88D0-E9263C5DD854&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhist2_title ='Freie und Hansestadt Hamburg, Behörde für Kultur und Medien (BKM), Denkmalschutzamt (K3)';
var geohhhist2_long = '<a href="' + geohhhist2_url + '" target="_blank">' + geohhhist2_title + '</a>';
var geohhhist2 = '<a href="' + geohhhist2_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhist2_title + '">Denkmalschutzamt HH</a>';
var geohhhorthophotos_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=5A0265FC-A307-4C71-AB62-F65E8C12E68B&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhorthophotos_long = '<a href="' + geohhhorthophotos_url + '" target="_blank">' + geohhhde_title + '</a>';
var geohhhorthophotos = '<a href="' + geohhhorthophotos_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhde_title + '">LGV HH</a>';
var geohhhorthophotos_unbelaubt_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=B2013F67-EB8A-4629-8E6D-55A5F74CE129&plugid=/ingrid-group:ige-iplug-hmdk.metaver';
var geohhhorthophotos_unbelaubt_long = '<a href="' + geohhhorthophotos_unbelaubt_url + '" target="_blank">' + geohhhde_title + '</a>';
var geohhhorthophotos_unbelaubt = '<a href="' + geohhhorthophotos_unbelaubt_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhde_title + '">LGV HH</a>';
var geohhhalkis_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=DC71F8A1-7A8C-488C-AC99-23776FA7775E';
var geohhhalkis_title = geohhhde_title + ', 2014';
var geohhhalkis_long = '<a href="' + geohhhalkis_url + '" target="_blank">' + geohhhalkis_title + '</a>';
var geohhhalkis = '<a href="' + geohhhalkis_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhalkis_title + '">LGV HH</a>';
var geohhhbodenrichtwerte_url ='https://metaver.de/trefferanzeige?docuuid=3FD07A1B-E239-43DB-811F-4AC21951A866&plugid=/ingrid-group:ige-iplug-hmdk.metaver&docid=3FD07A1B-E239-43DB-811F-4AC21951A866';
var geohhhbodenrichtwerte_long = '<a href="' + geohhhbodenrichtwerte_url + '" target="_blank">' + geohhhde_title + '</a>';
var geohhhbodenrichtwerte = '<a href="' + geohhhbodenrichtwerte_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhhde_title + '">LGV HH</a>';
var geohhbodendenkmalschutz_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=AB47AA1D-8EFE-4182-A1DF-98FDB8957901';
var geohhbodendenkmalschutz_title ='Freie und Hansestadt Hamburg, Archäologisches Museum';
var geohhbodendenkmalschutz_long = '<a href="' + geohhbodendenkmalschutz_url + '" target="_blank">' + geohhbodendenkmalschutz_title + '</a>';
var geohhbodendenkmalschutz = '<a href="' + geohhbodendenkmalschutz_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhbodendenkmalschutz_title + '">Archäologisches Museum HH</a>';
var geohhdenkmalschutz_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=3B43E143-2C8B-43E8-8004-EE9EDA3EA563';
var geohhdenkmalschutz_title ='Freie und Hansestadt Hamburg, Kulturbehörde';
var geohhdenkmalschutz_long = '<a href="' + geohhdenkmalschutz_url + '" target="_blank">' + geohhdenkmalschutz_title + '</a>';
var geohhdenkmalschutz = '<a href="' + geohhdenkmalschutz_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + geohhdenkmalschutz_title + '">Kulturbehörde HH</a>';
var backsteinattrib_url ='https://metaver.de/trefferanzeige?cmd=doShowDocument&docuuid=4FA654D8-C190-41B9-9A7B-2F1F5A3378EE';
var backsteinattrib_title ='Freie und Hansestadt Hamburg, Behörde für Stadtentwicklung und Wohnen';
var backsteinattrib_long = '<a href="' + backsteinattrib_url + '" target="_blank">' + backsteinattrib_title + '</a>';
var backsteinattrib = '<a href="' + backsteinattrib_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + backsteinattrib_title + '">Behörde für Stadtentwicklung und Wohnen HH</a>';

var stadtteilarchiv_title = 'Stadtteilarchiv Ottensen';
var stadtteilarchiv_url = 'https://stadtteilarchiv-ottensen.de/sammlung/';
var stadtteilarchiv_long = '<a href="' + stadtteilarchiv_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover">Stadtteilarchiv Ottensen e.V.</a>';
var stadtteilarchiv = '<a href="' + stadtteilarchiv_url + '" target="_blank" data-bs-placement="left" data-bs-toggle="popover">Stadtteilarchiv Ottensen</a>';

var warper55961_url = 'https://mapwarper.net/maps/55961';
var industriebahn_long = '<a target="_blank" href="' + warper55961_url + '">Map Warper</a>, <a target="_blank" href="' + stadtteilarchiv_url + '">' + stadtteilarchiv_title + '</a>, ' + public_domain_mark + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55961_url + '">Hilf mit, diese Karte zu verbessern</a>';
var warper55962_url = 'https://mapwarper.net/maps/55962';
var dilleben1736_long = '<a target="_blank" href="' + warper55962_url + '">Map Warper</a>, <a target="_blank" href="' + stadtteilarchiv_url + '">' + stadtteilarchiv_title + '</a>, ' + public_domain_mark + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55962_url + '">Hilf mit, diese Karte zu verbessern</a>';
var warper55963_url = 'https://mapwarper.net/maps/55963';
var ottensen1879_long = '<a target="_blank" href="' + warper55963_url + '">Map Warper</a>, <a target="_blank" href="' + stadtteilarchiv_url + '">' + stadtteilarchiv_title + '</a>, ' + public_domain_mark + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55963_url + '">Hilf mit, diese Karte zu verbessern</a>';

var Sp_Hamburg1900_url ='http://tudigit.ulb.tu-darmstadt.de/show/Sp_Hamburg1900/0001/index.htm/image';
var warper55631_url = 'https://mapwarper.net/maps/55631';
var Sp_Hamburg1900_title ='TU Darmstadt';
var Sp_Hamburg1900_long = '<a target="_blank" href="' + warper55631_url + '">Map Warper</a>, <a target="_blank" href="' + Sp_Hamburg1900_url + '">' + Sp_Hamburg1900_title + '</a>, ' + public_domain + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55631_url + '">Hilf mit, diese Karte zu verbessern</a>';
var Sp_Hamburg1900 = '<a target="_blank" href="' + warper55631_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + Sp_Hamburg1900_title + '" href="' + Sp_Hamburg1900_url + '">TU Darmstadt</a>';
var PPN741316862_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN741316862';
var warper15735_url = 'https://mapwarper.net/maps/15735';
var PPN741316862_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN741316862_long = '<a target="_blank" href="' + warper15735_url  + '">Map Warper</a>, <a target="_blank" href="' + PPN741316862_url + '">' + PPN741316862_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper15735_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN741316862 = '<a target="_blank" href="' + warper15735_url  + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN741316862_title + '" href="' + PPN741316862_url + '">Stabi HH</a>';
var PPN612292940_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN612292940';
var warper55598_url = 'https://mapwarper.net/maps/55598';
var PPN612292940_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN612292940_long = '<a target="_blank" href="' + warper55598_url + '">Map Warper</a>, <a target="_blank" href="' + PPN612292940_url + '">' + PPN612292940_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55598_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN612292940 = '<a target="_blank" href="' + warper55598_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN612292940_title + '" href="' + PPN612292940_url + '">Stabi HH</a>';
var PPN1675872090_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN1675872090';
var warper55599_url = 'https://mapwarper.net/maps/55599';
var PPN1675872090_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN1675872090_long = '<a target="_blank" href="' + warper55599_url + '">Map Warper</a>, <a target="_blank" href="' + PPN1675872090_url + '">' + PPN1675872090_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55599_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN1675872090 = '<a target="_blank" href="' + warper55599_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN1675872090_title + '" href="' + PPN1675872090_url + '">Stabi HH</a>';
var PPN611185121_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN611185121';
var warper15734_url = 'https://mapwarper.net/maps/15734';
var PPN611185121_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN611185121_long = '<a target="_blank" href="' + warper15734_url + '">Map Warper</a>, <a target="_blank" href="' + PPN611185121_url + '">' + PPN611185121_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper15734_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN611185121 = '<a target="_blank" href="' + warper15734_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN611185121_title + '" href="' + PPN611185121_url + '">Stabi HH</a>';
var PPN612293521_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN612293521';
var warper15777_url = 'https://mapwarper.net/maps/15777';
var PPN612293521_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN612293521_long = '<a target="_blank" href="' + warper15777_url + '">Map Warper</a>, <a target="_blank" href="' + PPN612293521_url + '">' + PPN612293521_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper15777_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN612293521 = '<a target="_blank" href="' + warper15777_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN612293521_title + '" href="' + PPN612293521_url + '">Stabi HH</a>';
var PPN611968711_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN612293521';
var warper55731_url = 'https://mapwarper.net/maps/55731';
var PPN611968711_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN611968711_long = '<a target="_blank" href="' + warper55731_url + '">Map Warper</a>, <a target="_blank" href="' + PPN611968711_url + '">' + PPN611968711_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55731_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN611968711 = '<a target="_blank" href="' + warper55731_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN611968711_title + '" href="' + PPN611968711_url + '">Stabi HH</a>';
var PPN717756688_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN717756688';
var warper55805_url = 'https://mapwarper.net/maps/55805';
var PPN717756688_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN717756688_long = '<a target="_blank" href="' + warper55805_url + '">Map Warper</a>, <a target="_blank" href="' + PPN717756688_url + '">' + PPN717756688_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55805_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN717756688 = '<a target="_blank" href="' + warper55805_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN717756688_title + '" href="' + PPN717756688_url + '">Stabi HH</a>';
var PPN656426772_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN656426772';
var warper55822_url = 'https://mapwarper.net/maps/55822';
var PPN656426772_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN656426772_long = '<a target="_blank" href="' + warper55822_url + '">Map Warper</a>, <a target="_blank" href="' + PPN656426772_url + '">' + PPN656426772_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55822_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN656426772 = '<a target="_blank" href="' + warper55822_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN656426772_title + '" href="' + PPN656426772_url + '">Stabi HH</a>';
var PPN79779798X_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN79779798X';
var warper55834_url = 'https://mapwarper.net/maps/55834';
var PPN79779798X_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN79779798X_long = '<a target="_blank" href="' + warper55834_url + '">Map Warper</a>, <a target="_blank" href="' + PPN79779798X_url + '">' + PPN79779798X_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55834_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN79779798X = '<a target="_blank" href="' + warper55834_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN79779798X_title + '" href="' + PPN79779798X_url + '">Stabi HH</a>';
var PPN612024857_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN612024857';
var warper55864_url = 'https://mapwarper.net/maps/55864';
var PPN612024857_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN612024857_long = '<a target="_blank" href="' + warper55864_url + '">Map Warper</a>, <a target="_blank" href="' + PPN612024857_url + '">' + PPN612024857_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55864_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN612024857 = '<a target="_blank" href="' + warper55864_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN612024857_title + '" href="' + PPN612024857_url + '">Stabi HH</a>';
var PPN620448482_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN620448482';
var warper55863_url = 'https://mapwarper.net/maps/55863';
var PPN620448482_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN620448482_long = '<a target="_blank" href="' + warper55863_url + '">Map Warper</a>, <a target="_blank" href="' + PPN620448482_url + '">' + PPN620448482_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55863_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN620448482 = '<a target="_blank" href="' + warper55863_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN620448482_title + '" href="' + PPN620448482_url + '">Stabi HH</a>';
var PPN1040632130_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN1040632130';
var warper55745_url = 'https://mapwarper.net/maps/55745';
var PPN1040632130_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN1040632130_long = '<a target="_blank" href="' + warper55745_url + '">Map Warper</a>, <a target="_blank" href="' + PPN1040632130_url + '">' + PPN1040632130_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55745_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN1040632130 = '<a target="_blank" href="' + warper55745_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN1040632130_title + '" href="' + PPN1040632130_url + '">Stabi HH</a>';
var PPN610391070_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN610391070';
var wikiwarper2589_url = 'https://warper.wmflabs.org/maps/2589';
var PPN610391070_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN688573649_url ='https://resolver.sub.uni-hamburg.de/kitodo/PPN688573649';
var warper55841_url = 'https://mapwarper.net/maps/55841';
var PPN688573649_title ='Staats- und Universitätsbibliothek Hamburg';
var PPN688573649_long = '<a target="_blank" href="' + warper55841_url + '">Map Warper</a>, <a target="_blank" href="' + PPN688573649_url + '">' + PPN688573649_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + warper55841_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN688573649 = '<a target="_blank" href="' + warper55841_url + '">Map Warper</a>, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN688573649_title + '" href="' + PPN688573649_url + '">Stabi HH</a>';
var PPN610391070_long = '<a target="_blank" href="' + wikiwarper2589_url + '">Wikimaps Warper</a>, <a target="_blank" href="' + PPN610391070_url + '">' + PPN610391070_title + '</a> &copy; ' + ccbysa40 + '<br /><a data-bs-placement="left" data-bs-toggle="popover" title="Jeder kann diese Karte weiter georeferenzieren" href="' + wikiwarper2589_url + '">Hilf mit, diese Karte zu verbessern</a>';
var PPN610391070 = '<a target="_blank" href="' + wikiwarper2589_url + '">Wikimaps Warper</a> &copy; <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + PPN610391070_title + '" href="' + PPN610391070_url + '">Stabi HH</a>';
var luftbild_nrw_title ='Landesarchiv NRW Abteilung Rheinland';
var luftbild_nrw_title_url ='http://www.archive.nrw.de/ms/search?link=FINDBUCH-Fb_c786a444-608d-45df-adaa-2de1c53b2898';
var warpermosaic1374_url = 'https://mapwarper.net/layers/1374';
var luftbild_nrw_1952_long = 'Quellennachweis: <a target="_blank" href="' + warpermosaic1374_url + '">Map Warper</a>, Hansa Luftbild AG, <a href="'+ luftbild_nrw_title_url +'" target="_blank">' + luftbild_nrw_title + '</a>, Einzelnachweise <a title="Övelgönne, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/2TTWMLBLW4FBL7CWCGETZPL2RZYU3LX6" target="_blank">[1]</a><a title="Ottensen, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/R3WSYVMCG5WAV65Y62CCRXSTQ6IQ2FVC" target="_blank">[2]</a><a title="Altona Süd, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/2NILWXQRL7TWYIPN4BCJXQGLZOIAZWHM" target="_blank">[3]</a><a title="Altona Nord, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/F5FHDPFY5LG4XZQRC7ELEKXTX6DEAKMT" target="_blank">[4]</a><a title="Othmarschen, Gauß-Krüger-Koordinaten: Rechtswert: 3558, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/3FYPHIL7N4FU7JMSCLZQYD74WBDGM632" target="_blank">[5]</a> &copy; ' + ccby30de + '';
var luftbild_nrw_1952 = '<a target="_blank" href="' + warpermosaic1374_url + '">Map Warper</a>, Hansa Luftbild AG, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + luftbild_nrw_title + '" href="' + luftbild_nrw_title_url + '">Landesarchiv NRW</a>';
var warpermosaic1377_url = 'https://mapwarper.net/layers/1377';
var luftbild_nrw_1956_long = 'Quellennachweis: <a target="_blank" href="' + warpermosaic1377_url + '">Map Warper</a>, Hansa Luftbild AG, <a href="'+ luftbild_nrw_title_url +'" target="_blank">' + luftbild_nrw_title + '</a>, Einzelnachweise <a title="Paulinenplatz, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/VKZICBKEVFUBVHEYFSYRYNQPPJBM4PDG" target="_blank">[1]</a><a title="Bahrenfelder Chaussee, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/TW76Y2QVQ6UB5CCAMW7IQGNPXR7B5VEU" target="_blank">[2]</a><a title="Ottensener Hauptstraße, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/KY77EAIDLBJCLDITOUVPW5DTIX7WV24Q" target="_blank">[3]</a><a title="Ottensen, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/Q6YE3GZTXGR7NJFMDTAGXDWWNSXTZDG7" target="_blank">[4]</a><a title="St. Pauli Fischmarkt, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/C7RX5G4L7TABAZSOSFLG5KMGS6CFWKQ7" target="_blank">[5]</a><a title="Altona - Diebsteich, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/QGXF34VH2IJUXJGRR3BLZIDOFOESYV3S" target="_blank">[6]</a><a title="Alsenplatz, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/OZ2EXUPJJCVFSKCP6UFYJZ2U4J46JR4X" target="_blank">[7]</a><a title="Altona Bf., Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/ZJEVIDZWIHZ7DB25N6XZAHW4PYJDLOQ5" target="_blank">[8]</a><a title="Palmaille, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/4MSVGTKVCGMZD66GOCBBECDUTRQHIMCQ" target="_blank">[9]</a><a title="Ruhrstraße, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/KM7GUX66VBT73RF2UB5ISSTVPE7JQIH7" target="_blank">[10]</a> &copy; ' + ccby30de + '';
var luftbild_nrw_1956 = '<a target="_blank" href="' + warpermosaic1377_url + '">Map Warper</a>, Hansa Luftbild AG, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + luftbild_nrw_title + '" href="' + luftbild_nrw_title_url + '">Landesarchiv NRW</a>';
var warpermosaic1376_url = 'https://mapwarper.net/layers/1376';
var luftbild_nrw_1957_long = 'Quellennachweis: <a target="_blank" href="' + warpermosaic1376_url + '">Map Warper</a>, Hansa Luftbild AG, <a href="'+ luftbild_nrw_title_url +'" target="_blank">' + luftbild_nrw_title + '</a>, Einzelnachweise <a title="Altona Süd, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5934" href="https://www.deutsche-digitale-bibliothek.de/item/CKBDCWN77SICYOC4LROSHY3NBDADC2YF" target="_blank">[1]</a><a title="Altona Nord, Gauß-Krüger-Koordinaten: Rechtswert: 3562, Hochwert: 5936" href="https://www.deutsche-digitale-bibliothek.de/item/ND4OGD6WBNO2N2VEXCIZH7TISLN7U52R" target="_blank">[2]</a><a title="Övelgönne, Gauß-Krüger-Koordinaten: Rechtswert: 3560, Hochwert: 593" href="https://www.deutsche-digitale-bibliothek.de/item/KIDBCH6VPCXXIZOHEZRIEJ76FQO4Y5RJ" target="_blank">[3]</a> &copy; ' + ccby30de + '';
var luftbild_nrw_1957 = '<a target="_blank" href="' + warpermosaic1376_url + '">Map Warper</a>, Hansa Luftbild AG, <a target="_blank" data-bs-placement="left" data-bs-toggle="popover" title="' + luftbild_nrw_title + '" href="' + luftbild_nrw_title_url + '">Landesarchiv NRW</a>';

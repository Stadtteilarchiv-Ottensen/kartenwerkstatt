// get meta for logo title
var metadate = document.querySelector('meta[name="DC.date"]').content;
var metaversion = document.querySelector('meta[name="DC.version"]').content;
var metadescription = document.querySelector('meta[name="DC.description"]').content;
var metasitename = document.querySelector('meta[name="DC.publisher"]').content;
var metatitle = document.querySelector('meta[name="DC.title"]').content;
var infotitle = document.title;
var infourl = window.location.href;

// Inhalt Metadaten
var infocontent = "<div class='infocontent'><div><a href='/karten'>Zum Kartenverzeichnis</a></div><table><tbody><tr><td valign='top'><strong>Titel:</strong></td><td>" + metatitle + "</td></tr><tr><td valign='top'><strong>Publikation:</strong></td><td>" + metasitename + "</td></tr><tr><td valign='top'><strong>Version:</strong></td><td>" + metaversion + " (" + metadate + ")</td></tr><tr><td valign='top'><strong>Autor:</strong><td><a href='https://altona.ws/autoren/martin-podolak' target='_blank'>Martin Podolak</a></td></tr><tr><td valign='top'><strong>PURL:</strong></td><td><a href='" + infourl + "'>" + infourl + "</a></td></tr><tr><td valign='top'><strong>Rechte:</strong></td><td>Wo nicht anders gekennzeichnet, verbleiben die Urheberrechte beim Autor.<br />Daten anderer Quellen werden rechts unten in der Karte und der jeweiligen Kartenlegende mit Lizenz bzw. Urheberrechtshinweis genannt.</td></tr><tr><td valign='top'><strong>Zitiervorschlag:</strong> </td><td><span style='font-family:monospace;'>Podolak, Martin: „" + metatitle + "“ in: <em>" + metasitename + "</em>, Hamburg " + metadate + " (Version " + metaversion + "). URL: " + infourl + "</span></td></tr></tbody></table></div>";
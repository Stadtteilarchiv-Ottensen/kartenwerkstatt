
# bzag-kartenwerkstatt
Interaktives Kartenmaterial der "Beiträge zur Altonaer Geschichte" (BzAG).

Das Kartenmaterial kann auf den Seiten von [Github](https://pod-o-mart.github.io/bzag-kartenwerkstatt/) oder der [BzAG](https://altona.ws/karten) betrachtet werden. Dem einfachen Nutzer werden diese Seiten ausreichen. Alle Anderen lesen weiter:

## Installation
Das Verzeichnis `karte` mit allen Dateien in ein beliebiges Verzeichnis auf dem eigenen Server/Webspace kopieren. Anschließend den jeweiligen Pfad zur Karte in

`karte/url_path_hauptkarte.js`

`karte/quarree/url_path_quarree.js`

`karte/quarree/friedhof/url_path_friedhof.js`

in der jew. Variable 

`url_path_hauptkarte`

`url_path_quarree`

`url_path_friedhof`

anpassen.

## PopUp-Bilder
In einigen Popups der Karten `karte/quarree` und `karte/quarree/friedhof` erscheinen Fotos der jeweiligen Objekte. Sollte dies nicht der Fall sein, so müssen die Fotos heruntergeladen und ebenfalls auf den Server/Webspace hochgeladen werden. Der jeweilige Pfad zu den Bildern muss in `karte/quarree/url_path_quarree.js` und in `karte/quarree/friedhof/url_path_friedhof.js` in der jew. Variable `url_path_friedhof_images` bzw. `url_path_friedhof_images` angegeben werden.

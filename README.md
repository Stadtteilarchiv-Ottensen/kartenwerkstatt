
# bzag-kartenwerkstatt
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5176565.svg)](https://doi.org/10.5281/zenodo.5176565)

Interaktives Kartenmaterial der "Beiträge zur Altonaer Geschichte" (BzAG).

Das Kartenmaterial kann auf den Seiten von [Github](https://pod-o-mart.github.io/bzag-kartenwerkstatt/) oder der [BzAG](https://altona.ws/karten) betrachtet werden. Dem einfachen Nutzer werden diese Seiten ausreichen. Alle Anderen lesen weiter:

## Installation
Das Verzeichnis `karte` mit allen Dateien in ein beliebiges Verzeichnis auf dem eigenen Server/Webspace kopieren. 

## PopUp-Bilder
In einigen Popups der Karten `karte/quarree` und `karte/quarree/friedhof` erscheinen Fotos der jeweiligen Objekte. Sollte dies nicht der Fall sein, so müssen die Fotos [hier heruntergeladen](https://zenodo.org/api/files/32986727-6e6f-4825-a040-d6b054a08a79/karte_img.zip) und entpackt ebenfalls auf den Server/Webspace hochgeladen werden. Der jeweilige Pfad zu den Bildern muss dann in `karte/quarree/index.html` und in `karte/quarree/friedhof/index.html` in der jew. Variable `url_path_friedhof_images` bzw. `url_path_friedhof_images` angegeben werden (siehe Zeile 5).

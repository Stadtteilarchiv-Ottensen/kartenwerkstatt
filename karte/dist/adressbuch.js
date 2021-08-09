var x = myFunction();
function myFunction() {
	y = "<h4 id='title_addressbooks' class='closed' onclick='hideshowadressbooks()'><div class='legend-caret'></div><span>Adressbuchsuche 1782-1976</span></h4><div id='adressbooks' style='display:none;justify-content:center;'><div style='width:max-content;'><form name='valform' action='index.html' method='GET'>Jahr <input type='text' size='4' maxlength='4' id='von' name='von' placeholder='von JJJJ'> <input type='text' size='4' maxlength='4' id='bis' name='bis' placeholder='bis JJJJ'><br/><input type='text' id='suchwort' name='suchwort' placeholder='Suchwort'  style='max-width:190px;'><br /><select name='teil' id='teil' style='max-width:190px;'><optgroup label='Teil:'><option value='StreetDirectory' onclick='enablesuchwort()'>Straßen</option><option value='DirectoryPersonsCompanies' onclick='enablesuchwort()'>Personen und Firmen</option><option value='MercantileDirectory' onclick='enablesuchwort()'>Branchen</option><option value='Communication' onclick='disablesuchwort()'>Verkehr und Kommunikation</option><option value='Administration' onclick='disablesuchwort()'>Behörden</option><option value='Advertisment' onclick='disablesuchwort()'>Werbung</option></optgroup></select><br/><input style='display:inline;' data-bs-placement='left' title='Öffnet ein neues Fenster mit den Suchergebnissen bei der Staats- und Universitätsbibliothek Hamburg' id='adressbuchsucheinput' type='button' name='submit' onclick='myFunction3()' value='Suche' /><a class='smallnote' style='float:right;display:inline;text-align:right;' href='https://agora.sub.uni-hamburg.de/subhh-adress/digbib/start' target='_blank' title='Digitalisierte Hamburger Adressbücher, Staats- und Universitätsbibliothek Hamburg'>Stabi&nbsp;HH</a><div style='clear:both;'></div><a class='smallnote' style='display:inline;text-align:right;' href='https://agora.sub.uni-hamburg.de/subhh-adress/digbib/browsevolume' target='_blank'>Stattdessen Adressbücher aufschlagen</a></div></div>";
	return y;	
}
document.getElementById("adressbuchsuche").innerHTML = x; 

function myFunction3() {
	//	location.href='test.html';
	var teil = document.getElementById("teil").value;
	var jahrvon = document.getElementById("von").value;
	var jahrbis = document.getElementById("bis").value;
	var suchwort = document.getElementById("suchwort").value;
	if ((teil === 'DirectoryPersonsCompanies')||(teil === 'MercantileDirectory')||(teil === 'StreetDirectory')) {
		window.open('https://agora.sub.uni-hamburg.de/subhh-adress/digbib/doasearch?sa1=fromDate&sv1=' + jahrvon + '&sa2=toDate&sv2=' + jahrbis + '&sa3=extension&sv3=Raum+Altona%2C+Ottensen%2C+Elbvororte&sa4=part&sv4=' + teil + '&sa5=alphabeticalSegment&sv5=' + suchwort + '&submit=Suchen',  '_blank');
	}
	else if ((teil === 'Communication')||(teil === 'Administration')) {
		window.open('https://agora.sub.uni-hamburg.de/subhh-adress/digbib/dometasearch?sby=YearUnderReport&sby=VolumeTitle&sby=PhysicalPageNo&sro=%3Aasc&sa1=YearUnderReport&so1=%3Aminv&sv1=' + jahrvon + '&sa2=YearUnderReport&so2=%3Amaxv&sv2=' + jahrbis + '&sa3=Extension&sv3=Raum+Altona%2C+Ottensen%2C+Elbvororte&sa4=' + teil + '&sv4=yes&submit=Suchen',  '_blank');
	}
	else if (teil === 'Advertisment') {
		window.open('https://agora.sub.uni-hamburg.de/subhh-adress/digbib/dometasearch?sby=YearUnderReport&sby=VolumeTitle&sby=PhysicalPageNo&sro=%3Aasc&sa1=YearUnderReport&so1=%3Aminv&sv1=' + jahrvon + '&sa2=YearUnderReport&so2=%3Amaxv&sv2=' + jahrbis + '&sa3=Extension&sa4=' + teil + '&sv4=yes&submit=Suchen',  '_blank');
	}
}

function enablesuchwort() {
	document.getElementById("suchwort").disabled = false;
}

function disablesuchwort() {
	document.getElementById("suchwort").disabled = true;
}

function hideshowadressbooks() {
	var t = document.getElementById("title_addressbooks");
	var a = document.getElementById("adressbooks");
	if (a.style.display === "none") {
		a.style.display = "flex";
		t.style.display = "flex";
		t.classList.remove("closed");
	} else {
		a.style.display = "none";
		t.classList.add("closed");	
	}
}
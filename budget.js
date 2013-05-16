
function bimbiComuni(){

	// totale  = totale con posti - bimbi in non-convenzionate + esclusi
	var totale_bambini = 8988 - 225 + 143;
	// bimbi in materne statali
	var bambini_statali = 1611;
	// bimbi in materne paritarie
	var bambini_paritarie = 1825;
	// bimbi che "dovrebbero" andare in comunali
	var bambini_comunali = 5327 + 143; // posti comunali + esclusi.
	// retta media in paritaria al 2012 in termini reali, i.e. se non ci fosse il contributo
	var retta_media = 3047 + (1110000/bambini_paritarie);
	// quanto costa un posto comunale.  
	// Arrotondato per eccesso in modo da ottenere un punto di partenza che 
	// combacia con le cifre ufficiali (altrimenti mi risultano molti piu' esclusi)
	var costo_bambino_comunale = 35500000 / 5327 + 1100; // 7764
	
	var budget_pari = document.getElementById('euroPari').value;
	var posti_persi = Math.round(budget_pari * 1000 / costo_bambino_comunale);
	
	var posti_comunali = bambini_comunali - posti_persi;
	var posti_esclusi = totale_bambini - (bambini_statali + posti_comunali + bambini_paritarie);
	var ammanco = Math.round(costo_bambino_comunale * posti_esclusi);
	var euroRetta = Math.round(retta_media - (budget_pari / bambini_paritarie * 1000)) / 10;
	document.getElementById('euroPariLabel').value = budget_pari / 1000;
	document.getElementById('numComunali').value = posti_comunali - 55; // 55 sono posti "persi naturalmente" per questioni logistiche (scuole troppo lontane etc)
	document.getElementById('numEsclusi').value = posti_esclusi;
	document.getElementById('euroRetta').value = euroRetta;
	document.getElementById('pariPerc').value = Math.round((euroRetta - 304.7) / 304.7 * 100);
	document.getElementById('euroAmmanco').value = ammanco;
	document.getElementById('percEsclusi').value = Math.round((posti_esclusi - 143)  / 143 * 100);
	document.getElementById('costoPerBimbo').value = costo_bambino_comunale;
	document.getElementById('numComunaliVar').value = document.getElementById('numComunali').value - 5327 + 55;
}

function resetBudget(){
	document.getElementById('euroPari').value = 1110;
	bimbiComuni();
}

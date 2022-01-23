function selInit() {

	var tabs = document.getElementById("tabs");
	var litag = tabs.querySelector("li");
	litag.style.borderBottom = "1px solid white"
	litag.style.background = "white";
}

function selView(n, litag){

	var catastropheview = "none";
	var pollutionview = "none";
	var exportview = "none";
	switch(n) {
		case 1 : 
			catastropheview = "inline";
			break;
		case 2 :
			pollutionview = "inline";
			break;
		case 3 :
			exportview = "inline";
			break;

		default:
		break;
	}

	document.getElementById('catatab').style.display = catastropheview;
	document.getElementById('pollutiontab').style.display = pollutionview;
	document.getElementById('exporttab').style.display = exportview ;
	var tabs = document.getElementById("tabs");
	var ca = Array.prototype.slice.call(tabs.querySelector("li"));
	ca.map(function(elem) {

	elem.style.background="#F0F0F0";
	elem.style.borderBottom="1px solid gray";
	});

	litag.style.borderBottom="1px solid white";
	litag.style.background= "white";
}

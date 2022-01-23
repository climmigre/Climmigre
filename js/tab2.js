function selInit() {

	var tabs = document.getElementById("tabs");
	var litag = tabs.querySelector("li");
	litag.style.borderBottom = "1px solid white"
	litag.style.background = "white";
}

function selView(n, litag){

	var fluxview = "none";
	var exportview = "none";
	switch(n) {
		case 1 : 
			fluxview = "inline";
			break;
		case 2 :
			exportview = "inline";
			break;

		default:
		break;
	}

	document.getElementById('fluxtab').style.display = fluxview;
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
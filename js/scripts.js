function openNav(){
	var x = document.getElementById("navigation");
	if(x.className === "navigation"){
		x.className += " menujs";
		document.getElementById("treslines").innerHTML = "&Cross;";
	}else {
		x.className = "navigation"
		document.getElementById("treslines").innerHTML = "&#9776;";
	}

}
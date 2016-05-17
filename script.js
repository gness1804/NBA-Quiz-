function playFunction() {
	var x; //Q1
	if (document.getElementById("1a").checked) {
		var x = 2;
	}
	else if (document.getElementById("1b").checked) {
		var x = 1;
	}
	else if (document.getElementById("1c").checked) {
		var x = 3;
	}
	else if (document.getElementById("1d").checked) {
		var x = 4;
	}
	else {
		alert("Please select one choice for each question, leaving none blank.");
		return;
	}
	var y; //Q2
	if (document.getElementById("2a").checked) {
		var y = 2;
	}
	else if (document.getElementById("2b").checked) {
		var y = 4;
	}
	else if (document.getElementById("2c").checked) {
		var y = 3;
	}
	else if (document.getElementById("2d").checked) {
		var y = 1;
	}
	else {
		alert("Please select one choice for each question, leaving none blank.");
		return;
	}
	var z;   //Q3
	if (document.getElementById("3a").checked) {
		var z = 4;
	}
	else if (document.getElementById("3b").checked) {
		var z = 2;
	}
	else if (document.getElementById("3c").checked) {
		var z = 1;
	}
	else if (document.getElementById("3d").checked){
		var z = 3;
	}
	else {
		alert("Please select one choice for each question, leaving none blank.");
		return;
	}
	var a; //Q4
	if (document.getElementById("4a").checked) {
		var a = 3;
	}
	else if (document.getElementById("4b").checked) {
		var a = 1;
	}
	else if (document.getElementById("4c").checked) {
		var a = 4;
	}
	else if (document.getElementById("4d").checked) {
		var a = 2;
	}
	else {
		alert("Please select one choice for each question, leaving none blank.");
		return;
	}
	var b; //Q5 
	if (document.getElementById("5a").checked) {
		var b = 4;
	}
	else if (document.getElementById("5b").checked) {
		var b = 2;
	}
	else if (document.getElementById("5c").checked) {
		var b = 1;
	}
	else if (document.getElementById("5d").checked) {
		var b = 3;
	}
	else {
		alert("Please select one choice for each question, leaving none blank.");
		return;
	}
	var c; //Q6 
	if (document.getElementById("6a").checked) {
		var c = 2;
	}
	else if (document.getElementById("6b").checked) {
		var c = 3;
	}
	else if (document.getElementById("6c").checked) {
		var c = 4;
	}
	else if (document.getElementById("6d").checked) {
		var c = 1;
	}
	else {
		alert("Please select one choice for each question, leaving none blank.");
		return;
	}
	var total = (x + y + z + a + b + c) * 2;
	if (total < 21) {
		window.open("spurs.html");
	}
	else if (total > 20 && total < 30) {
		window.open("rockets.html");
	}
	else if (total > 29 && total < 39) {
		window.open("heat.html");
	}
	else {
		window.open("lakers.html");
	}
}

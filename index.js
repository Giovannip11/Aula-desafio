function converter() {
	var temp = document.getElementById("temp").value;
	var celsius = 0;
	var fahrenheit = 0;
	var kelvin = 0;

	var unit = temp.slice(-1);

	if (unit === "C") {
		celsius = parseFloat(temp);
		fahrenheit = celsius * 9/5 + 32;
		kelvin = celsius + 273.15;
	} else if (unit === "F") {
		fahrenheit = parseFloat(temp);
		celsius = (fahrenheit - 32) * 5/9;
		kelvin = celsius + 273.15;
	} else if (unit === "K") {
		kelvin = parseFloat(temp);
		celsius = kelvin - 273.15;
		fahrenheit = celsius * 9/5 + 32;
	} else {
		alert("Por favor, insira uma temperatura válida (exemplo: 23C, 75F, 300K).");
		return;
	}

	var resultado = "Celsius: " + celsius.toFixed(2) + "C <br>";
	resultado += "Fahrenheit: " + fahrenheit.toFixed(2) + "F <br>";
	resultado += "Kelvin: " + kelvin.toFixed(2) + "K";

	document.getElementById("resultado").innerHTML = resultado;

	if (celsius >= 30) {
		document.body.style.backgroundColor = "#ff0000";
	} else if (celsius >= 20) {
		document.body.style.backgroundColor = "#ffff00";
	} else {
		document.body.style.backgroundColor = "#0000ff";
	}
}

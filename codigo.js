document.querySelector('.boton_calcular').addEventListener('click', function() {
	let altura = document.getElementById('altura').value;
	let peso = document.getElementById('peso').value;
	
	let resultado = '';
	let imagen = '';
	if (altura === "" || peso === "") {
	} else {
	  let imc = peso / (altura ** 2);

	  if (imc < 16) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Delgadez Severa';
	    imagen = 'images/delgadez_severa.jpeg';
	  } else if (imc < 17) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Delgadez moderada';
	    imagen = 'images/delgadez_moderada.jpeg';
	  } else if (imc < 19) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Delgadez aceptable';
	    imagen = 'images/delgadez_aceptable.jpeg';
	  } else if (imc < 25) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Peso Normal';
	    imagen = 'images/peso_normal.jpeg';
	  } else if (imc < 30) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Sobrepeso';
	    imagen = 'images/sobrepeso.jpeg';
	  } else if (imc < 35) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Obesidad Tipo I';
	    imagen = 'images/obesidad_tipo_1.jpeg';
	  } else if (imc <= 40.00) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Obesidad Tipo II';
	    imagen = 'images/obesidad_tipo_2.jpeg';
	  } else if (imc > 40.00) {
	    resultado = 'Tu IMC es: ' + imc.toFixed(2) + '\n' + 'Obesidad Tipo III';
	    imagen = 'images/obesidad_tipo_3.jpeg';
	  }

	}
	document.getElementById('resultado_texto').innerText = resultado;
	document.getElementById('resultado_imagen').src = imagen;
});
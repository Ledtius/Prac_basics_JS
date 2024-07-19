function classifyNumbers() {
  // Solicitar al usuario ingresar cinco números separados por comas
  let input = prompt("Ingrese cinco números separados por comas:");

  if (input === null) {
    alert("Operación cancelada");
    return;
  }

  // Dividir la cadena de entrada en un array de cadenas
  let numbers = input.split(',');

  if (numbers.length !== 5) {
    alert("Por favor, ingrese exactamente cinco números.");
    return;
  }

  // Convertir las cadenas a números
  let num1 = parseFloat(numbers[0].trim());
  let num2 = parseFloat(numbers[1].trim());
  let num3 = parseFloat(numbers[2].trim());
  let num4 = parseFloat(numbers[3].trim());
  let num5 = parseFloat(numbers[4].trim());

  // Inicializar contadores para cada categoría
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  // Función para clasificar un número
  function clasificarNumero(num) {
    if (isNaN(num)) {
      alert("Por favor, ingrese solo números.");
      return;
    }

    if (num > 0) {
      positivos++;
    } else if (num < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  // Clasificar los números
  clasificarNumero(num1);
  clasificarNumero(num2);
  clasificarNumero(num3);
  clasificarNumero(num4);
  clasificarNumero(num5);

  // Mostrar los resultados
  alert("Cantidad de números positivos: " + positivos);
  alert("Cantidad de números negativos: " + negativos);
  alert("Cantidad de ceros: " + ceros);
}

// Llamar a la función
classifyNumbers();

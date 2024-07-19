/*Ejercicio 2: Suma de Números
Crea una función que solicite al usuario ingresar números hasta que se ingrese un número negativo. La función debe sumar todos los números positivos ingresados y mostrar el resultado final*/

function positivePlus() {
  let num = 0;
  let num2 = 0;
  let count = 0;

  while (num >= 0) {
    num = prompt("Writing a number");

    if (num === null) {
      alert("Cancelled Operation");
      return;
    }

    num = num.trim();

    if (!num) {
      alert("Null value or empty");
    } else if (isNaN(num)) {
      alert("Invalid value");
    } else {
      num = parseFloat(num);

      console.log("\nContador: " + count++);
      num2 = num2 + num;
      if (num >= 0) {
        console.log("\nSuma en el bucle: " + num2);
      }
    }
  }
}

positivePlus();

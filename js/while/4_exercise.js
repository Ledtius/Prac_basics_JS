/* Ejercicio 4: Tabla de Multiplicar
Crea una función que muestre en la consola la tabla de multiplicar del 7 (del 7 x 1 al 7 x 10) usando un bucle while. */

function tableOfSeven() {
  let otherNumber = 1;

  while (otherNumber < 11) {
    console.log(`\n ${7} X ${otherNumber} = ${7 * otherNumber}`);
    otherNumber++;
  }
}

tableOfSeven();

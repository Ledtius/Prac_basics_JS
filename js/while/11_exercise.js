/* Mostrar Números Pares
Crea una función que muestre todos los números pares del 1 al 50 utilizando un bucle while. */

function evenNumber() {
  let num = 0;

  while (num < 50) {
    num += 2;
    console.log(`${num}`);
  }
}

evenNumber();

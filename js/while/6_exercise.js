/* Ejercicio 6: Encontrar el Mínimo
Escribe una función que pida al usuario ingresar números hasta que se ingrese un número específico (por ejemplo, -1 para terminar). La función debe encontrar y mostrar el número más pequeño ingresado. */

function minium() {
  //Inicializo contador
  let numSys = 5;
  let key = true;
  let index = 0;

  //Pedir el numero
  let num = prompt("Writing the number in the system (Not spaces)");

  //Si se da cancelar
  if (num === null) {
    alert("Cancelled operation");
    return;
  }

  if (!num) {
    alert("Null or empty value");
    return;
  } else if (isNaN(num)) {
    alert("Invalid value - Only numbers");
    return;
  }

  if (num != null) {
    let array = num.split(" ");
    let last = array;

    console.log(`index: ${index}\nvalue: ${array}`);
    index++;

    while (key) {
      if (num == numSys) {
        key = false;
      } else {
        num = prompt("Writing the number in the system - AGAIN (Not spaces)");

        //Si se da cancelar
        if (num === null) {
          alert("Cancelled operation");
          return;
        }

        if (!num) {
          alert("Null or empty value");
          return;
        } else if (isNaN(num)) {
          alert("Invalid value - Only numbers");
          return;
        } else {
          last = array;

          if (num != null) {
            array[index] = num.split(" ");

            console.log(`index: ${index}\nvalue: ${array}`);

            let arrayOrden = array.sort(function (a, b) {
              return a - b;
            });

            console.log(`Ordenado: ${arrayOrden}`);

            if (num == 5) {
              alert(`Numero menor ingresado: ${arrayOrden[0]}`);
            }
          }

          index++;
        }
      }
    }
  }
}

minium();

/* function minium() {
  //Inicializo contador
  let numSys = 5;
  let key = true;


  //Pedir el numero
  let num = prompt("Writing the number in the system");

  //Si se da cancelar
  if (num === null) {
    alert("Cancelled operation");
  }

  while (key) {
    if (num == numSys) {
      key = false;
    } else {
      let lastArray = num.split("");

      num = prompt("Writing the number in the system - AGAIN");

      let array = num.split("");

      console.log("First: " + array);

      let combi = lastArray.concat(array);

      console.log("Last: " + lastArray);

      console.log("Combi: " + combi);
    }
  }
}
 */

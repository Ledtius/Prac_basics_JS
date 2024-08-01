/* Ejercicio 6: Encontrar el Mínimo
Escribe una función que pida al usuario ingresar números hasta que se ingrese un número específico (por ejemplo, -1 para terminar). La función debe encontrar y mostrar el número más pequeño ingresado. */

function minimun() {
  function validation() {
    //Want the data
    let num = prompt("Writing a number please");

    if (num == null) {
      alert("Cancelled operation");
      return;
    }

    num = num.trim();

    //Validations
    if (!num) {
      alert("Empty or null value");
      return;
    } else if (isNaN(num)) {
      alert("Invalid value - numbers only");
      return;
    }

    return num;
  }

  //Funcion of loop

  function loop(value) {
    const numSys = 55;
    let index = 0;

    if (value == numSys) {
      alert(`Your guess is correct!\n The number of the system is: ${numSys}`);

      alert(`The minimum value that you digitated: ${value}`);
      return;
    } else if (value == undefined) {
      return;
    }
    let array = value.split(" ");

    array[index] = value.split(" ");

    let arrayOrder = array.sort(function (a, b) {
      return a - b;
    });

    console.log(`1) Group of numbers: ${array}\nIndex array: ${index}`);

    if (value != numSys) {
      let key = true;

      while (key) {
        value = validation();
        index++;

        if (value == numSys) {
          key = false;

          array[index] = value.split(" ");

          console.log(`1) Group of numbers: ${array}\nIndex array: ${index}`);

          alert(
            `Your guess is correct!\nThe number of the system is:  ${numSys}`
          );

          alert(`The minimum value that you digitated: ${array[0]}`);
          return;
        } else if (value == undefined) {
          index--;
          console.log(`1) Group of numbers: ${array}\nIndex array: ${index}`);

          return;
        }

        array[index] = value.split(" ");
        arrayOrder = array.sort(function (a, b) {
          return a - b;
        });

        console.log(`Order of the array: ${arrayOrder}`);

        console.log(`Group of numbers: ${array}\nIndex array: ${index}`);
      }
    }
  }
  loop(validation());
}

minimun();

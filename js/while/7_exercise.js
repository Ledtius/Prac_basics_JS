/* Ejercicio: Generar la Secuencia de Lucas
Descripción:

Crea una función en JavaScript que solicite al usuario ingresar un número que represente la cantidad de términos que desea generar de la secuencia de Lucas. La función debe validar la entrada del usuario y luego generar y mostrar la secuencia de Lucas hasta el número de términos especificado */

function sequenceLucas() {
  let userNumber = prompt("Writing one number");

  if (userNumber === null) {
    alert("Cancelled operation");
    return;
  }

  userNumber = userNumber.trim();
  if (!userNumber) {
    alert("Null or empty value");
  } else if (isNaN(userNumber)) {
    alert("Invalid value - Only numbers");
  } else {
    let num1 = 2;
    let num2 = 1;
    let cont = 0;

    cont++;
    console.log(num1);
    while (cont < userNumber) {
      console.log(num2);

      let nextNumber = num1 + num2;

      num1 = num2;
      num2 = nextNumber;
      cont++;
      
    }
  }
}

sequenceLucas();
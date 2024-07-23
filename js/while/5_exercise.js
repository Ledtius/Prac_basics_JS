/* Ejercicio 5: Secuencia de Fibonacci
Desarrolla una función que imprima los primeros n números de la secuencia de Fibonacci. El valor de n debe ser proporcionado por el usuario. Usa un bucle while para generar la secuencia. */

function fibonacci() {
  let userNumber = prompt("Writing a userNumber");

  if (userNumber === null) {
    alert("Cancelled operation");
    return;
  }
  userNumber = userNumber.trim();

  if (!userNumber) {
    alert("Value null or empty");
  } else if (isNaN(userNumber)) {
    alert("Invalid value - only numbers");
  } else {
    userNumber = Number(userNumber);

    let num1 = 0;
    let num2 = 1;
    let count = 0;

    console.log("Fibonacci sequence:");
    console.log(num1); // Mostrar el primer término
    count++;

    while (count < userNumber) {
      console.log(num2); // Mostrar el siguiente término
      let nextTerm = num1 + num2; // Calcular el siguiente término
      num1 = num2; // Actualizar num1
      num2 = nextTerm; // Actualizar num2
      count++;
    }

  
  }
}

fibonacci();

/* - **Generar números primos en un rango**:
    
    - Crea un programa que solicite al usuario dos números y luego imprima todos los números primos que se encuentren en ese rango (incluyendo los límites si son primos). */

let validation = function () {
  let number1 = prompt(
    "Prime numbers generator\n\nWriting the begin range of the prime numbers"
  );

  if (number1 === undefined) {
    alert("Cancelled operation");
    return;
  }

  number1 = number1.trim();

  if (!number1) {
    alert("Null or empty value");
    return;
  } else if (isNaN(number1)) {
    alert("Invalid value - numbers only");
    return;
  } else if (number1 < 0) {
    alert("Positive values only");
    return;
  } else if (number1 % 1 != 0) {
    alert("Invalid value  - This value is not integer");
    return;
  }

  /* Number.isInteger(number1) */
  return number1;
};

let validation2 = function () {
  let number2 = prompt(
    "Prime numbers generator\n\nWriting the end range of the prime numbers"
  );

  if (number2 === undefined) {
    alert("Cancelled operation");
    return;
  }

  number2 = number2.trim();

  if (!number2) {
    alert("Null or empty value");
    return;
  } else if (isNaN(number2)) {
    alert("Invalid value - numbers only");
    return;
  } else if (number2 < 0) {
    alert("Positive values only");
    return;
  } else if (number2 % 1 != 0) {
    alert("Invalid value  - This value is not integer");
    return;
  }

  return number2;
};

function primeNumbers() {
  let firstNumber = Number(validation());

  if (firstNumber === undefined) return;

  let secondNumber = Number(validation2());

  if (secondNumber === undefined) return;

  if (firstNumber > secondNumber) {
    alert("The first value is major than the second");
    return;
  }

  let count = 0;

  for (let i = firstNumber; i <= secondNumber; i++) {
    // Contador que vaya del 1 al 9 y que el residuo si es 1 sume a otro contador
    if (i != 1) {
      if (i == 2) {
        console.log(i);
      }
      if (i == 3) {
        console.log(i);
      }
      if (i == 5) {
        console.log(i);
      }

      if (i == 7) {
        console.log(i);
      }

      if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
        console.log(i);
      }
    }
  }
}
primeNumbers();

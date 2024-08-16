/* Ejercicio 9: Verificar Número Primo
Desarrolla una función que pida al usuario ingresar un número entero positivo y determine si el número es primo. Usa un bucle while para verificar si el número es divisible solo por 1 y por sí mismo. */

function primeNumbers() {
  function verification() {
    let number = prompt("Writing the number");

    if (number === null) {
      alert("Cacelled operation");
      return;
    }

    number = number.trim();

    if (!number) {
      alert("Empty or null value");
    } else if (isNaN(number)) {
      alert("Invalid value - only numbers");
    } else {
      number = Number(number);

      if (number < 0) {
        alert("Positive numbers only");
        return;
      } else if (number % 1 !== 0) {
        alert("Not decimal numbers");
        return;
      }

      return number;
    }
  }

  let userNumber = verification();

  /*   if(userNumber === 1){
    console.log(`${userNumber} is a prime number`);
    return;
  } */

  let count = 0;
  let countRemainderZero = 0;

  while (count <= userNumber) {
    let value = userNumber % count;

    console.log(`Remainder: ${value}`);
    if (value === 0) {
      countRemainderZero++;
      console.log(`Count of the remainders in zero: ${countRemainderZero}`);
    }

    count++;
  }

  if (countRemainderZero <= 2) {
    console.log(`${userNumber} is a prime number`);
  }
}

primeNumbers();

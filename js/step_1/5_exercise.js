/* Ejercicio 5: Clasificación de números
Crea una función que solicite al usuario ingresar cinco números y los clasifique en tres categorías: positivos, negativos y ceros. Muestra la cantidad de números que pertenecen a cada categoría. */

function allNumbers() {
  const positiveNumberRegex = /^[1-9]\d*$/;

  const negativeNumberRegex = /^-\d+$/;

  const zeroRegex = /^0+$/;

  let numbers = prompt("Writing five numbers");

  if (numbers === null) {
    alert("Operation canceled");
    return;
  }

  numbers.trim();
  alert(numbers.split(" "));

  if (isNaN(numbers)) {
    alert("Invalid value - numbers only");
  } else {
    alert("Say hello");


    let spaceNumbers = numbers.split("");
    
    alert("Space " + spaceNumbers.length);

    alert(spaceNumbers);

    if (spaceNumbers.length > 5 || spaceNumbers.length < 5) {
      alert("Is necesary five numbers");
    } else {
      alert("Hello");
    }
  }

  /*   alert(numbers.includes(numbers.match(positiveNumberRegex))); */

  /*  if (numbers) {
    alert(numbers.match(positiveNumberRegex));
  } else if (numbers.includes(numbers.match(positiveNumberRegex))) {
    alert(numbers.match(positiveNumberRegex));
  } else if (numbers.includes(numbers.match(negativeNumberRegex))) {
    alert(numbers.match(negativeNumberRegex));
  } else if (numbers.includes(numbers.match(zeroRegex))) {
    alert(numbers.match(zeroRegex));
  } */
}

allNumbers();

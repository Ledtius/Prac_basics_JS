/* ### Ejercicio 3: Adivinar el número

Desarrolla un programa en el que el usuario deba adivinar un número secreto entre 1 y 10. El programa debe continuar pidiendo al usuario que adivine el número hasta que lo haga correctamente. Una vez que el usuario adivine el número, el programa debe mostrar cuántos intentos le tomó adivinar correctamente. */

let verification = function () {
  let value = prompt(
    "Guess the correct number of 1 to 10 \n\nWriting a number"
  );

  if (value === null) {
    alert("Cancelled operation");
    return;
  }

  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return;
  } else if (isNaN(value)) {
    alert("Invalid value - numbers only");
    return;
  } else if (value < 0 || value > 10) {
    alert("Incorrect range value - is 1 to 10");
    return;
  }

  return Number(value);
};

let guessNumber = function () {
  const guessN = 7;
  let count = 0;
  let number = 0;

  do {
    number = verification();

    if (number !== undefined) {
      if (number < guessN) {
        alert("More higher");
        count++;
      } else if (number > guessN) {
        alert("More lower");
        count++;
      }else{
        count++;
      }
    } else {
      return;
    }
    
  } while (number !== guessN);
  alert(`Congratulation! guess the number\nAttempts: ${count}`);
};

guessNumber();

//ChatGPT correction
/* 
let verification = function () {
  let value = prompt("Guess the correct number between 1 and 10:\n\nEnter a number");

  if (value === null) {
    alert("Cancelled operation");
    return;
  }

  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return;
  } else if (isNaN(value)) {
    alert("Invalid value - numbers only");
    return;
  } else if (value < 1 || value > 10) {
    alert("Incorrect range value - it must be between 1 and 10");
    return;
  }

  return Number(value);
};

let guessNumber = function () {
  const guessN = 7; // Número a adivinar
  let attempts = 0;
  let number;

  do {
    number = verification();
    attempts++;

    if (number !== undefined) {
      if (number < guessN) {
        alert("Higher!");
      } else if (number > guessN) {
        alert("Lower!");
      }
    } else {
      return;
    }
  } while (number !== guessN);

  alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
};

guessNumber();
 */
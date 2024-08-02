/* Contar Vocales
Crea una función que solicite al usuario ingresar una frase y cuente cuántas vocales (a, e, i, o, u) contiene. Usa un bucle while para recorrer cada carácter de la frase. */

function vowels() {
  function validation() {
    let phrase = prompt("Writing a phrase");

    if (phrase === null) {
      alert("Cancelled operation");
      return;
    }

    phrase = phrase.trim();

    if (!phrase) {
      alert("Empty or null value");
    } else if (!isNaN(phrase)) {
      alert("Letters only");
    }

    phrase = phrase.split("");
    return phrase;
  }

  let count = (countA = countE = countI = countO = countU = 0);

  let regExpA = /[a]/gi;

  let userPhrase = validation();
  let lengthPhrase = userPhrase.length;

  console.log(lengthPhrase);

  console.log(userPhrase);

  /*   console.log(count);

  console.log(userPhrase[count]); */

  while (count != lengthPhrase) {
    if (userPhrase[count] === "A" || userPhrase[count] === "a") {
      console.log(`Position: ${count}\nValue: ${userPhrase[count]}`);
      countA++;
    } else if (userPhrase[count] === "E" || userPhrase[count] === "e") {
      console.log(`Position: ${count}\nValue: ${userPhrase[count]}`);
      countE++;
    } else if (userPhrase[count] === "I" || userPhrase[count] === "i") {
      console.log(`Position: ${count}\nValue: ${userPhrase[count]}`);
      countI++;
    }else if (userPhrase[count] === "O" || userPhrase[count] === "o") {
      console.log(`Position: ${count}\nValue: ${userPhrase[count]}`);
      countO++;
    }else if (userPhrase[count] === "U" || userPhrase[count] === "u") {
      console.log(`Position: ${count}\nValue: ${userPhrase[count]}`);
      countU++;
    }

    count++;
  }
  console.log("Number of A: " + countA);
  console.log("Number of E: " + countE);
  console.log("Number of I: " + countI);
  console.log("Number of O: " + countO);
  console.log("Number of U: " + countU);



}

vowels();

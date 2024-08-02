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
    phrase = phrase.toLowerCase();

    if (!phrase) {
      alert("Empty or null value");
    } else if (!isNaN(phrase)) {
      alert("Letters only");
    }

    phrase = phrase.split("");
    return phrase;
  }

  let count = (countA = countE = countI = countO = countU = 0);

  let userPhrase = validation();

  if (userPhrase === undefined) {
    return;
  }
  
  let lengthPhrase = userPhrase.length;

  while (count != lengthPhrase) {
    if (userPhrase[count] === "a") {
      countA++;
    } else if (userPhrase[count] === "e") {
      countE++;
    } else if (userPhrase[count] === "i") {
      countI++;
    } else if (userPhrase[count] === "o") {
      countO++;
    } else if (userPhrase[count] === "u") {
      countU++;
    }

    count++;
  }

  alert(
    `Number of 'a' : ${countA}\nNumber of 'e' : ${countE}\nNumber of 'i' : ${countI}\nNumber of 'o' : ${countO}\nNumber of 'u' : ${countU}\n`
  );
}

vowels();

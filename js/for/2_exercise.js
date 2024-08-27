/* **Contar ocurrencias de un carácter en una cadena**:
    
    - Dada una cadena de texto ingresada por el usuario, escribe un programa que cuente cuántas veces aparece un carácter específico en esa cadena. El usuario debe poder ingresar tanto la cadena como el carácter a buscar.  */

let validation1 = function () {
  let value = prompt(
    "Find the character that you writing\nWriting a phrase o whatever"
  );

  if (value === null) {
    alert("Cancelled operation");
    return;
  }
  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return;
  }

  return value;
};

let validation2 = function () {
  let valueFind = prompt("Write the character that you want find");

  if (valueFind === null) {
    alert("Cancelled operation");
    return;
  }

  valueFind = valueFind.trim();

  if (!valueFind) {
    alert("Null or empty  valueFind");
    return;
  }
  console.log(typeof valueFind);
  return valueFind;
};

let findCharacters = function () {
  let userCharacters = validation1();

  if (userCharacters === undefined) return;

  let findCh = validation2();

  if (findCh === undefined) return;
  else if (findCh.length > 1) {
    alert("Only one character to find");
    return;
  }

  let count = 0;

  for (let i = 0; i < userCharacters.length; i++) {
    if (userCharacters[i] === findCh) {
      count++;
    }
  }

  alert(`The count of the characters that finded: ${count}`);
};

findCharacters();

/*   for (let i = 0; i < userCharacters.length; i++) {
    console.log(`Word: ${userCharacters[i]}\nWord Finding; ${findCh[i]}`);

    if (userCharacters[i] === findCh) {
      count++;
    }
  } */

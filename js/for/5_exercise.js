/* - **Crear una pirámide de asteriscos**:
    
    - Escribe un programa que construya una pirámide de asteriscos basada en un número de niveles ingresado por el usuario. Por ejemplo, si el usuario ingresa `5`, la pirámide debe tener 5 niveles, con 1 asterisco en la primera fila, 3 en la segunda, y así sucesivamente, centrados en cada fila. */

let validation = function () {
  let value = prompt(
    "The '*' pyramids\n\nWriting the number of the level of the pyramid"
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
  } else if (value < 1) {
    alert("Invalid level - The minimun value is one");
    return;
  }

  return value;
};

function pyramid() {
  let level = validation();
  let thing = "*";
  if (level === undefined) return;

  for (i = 1; i <= level; i++) {
    if (i === 1) console.log(thing.repeat(i));

    console.log(thing.repeat(i * 3));
    count++;
  }
}

pyramid();

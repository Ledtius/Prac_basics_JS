let nombre = solicitarNombre();
if (nombre) {
  let nota = solicitarNota();
  if (nota !== null) {
    // Se uso de esta manera para que entre 0
    clasificarNota(nombre, nota);
  }
}

function solicitarNombre() {
  let nombre = prompt("Digite el nombre del estudiante");

  if (nombre === null) {
    alert("Valor de nombre nulo");
  } else {
    nombre = nombre.trim();
    if (!nombre) {
      console.log("Caracter invalido - vacio o nulo");
    } else if (!isNaN(nombre)) {
      console.log("Caracter invalido - números no permitidos: " + nombre);
    } else if (nombre.length > 50) {
      console.log("Valor invalido - nombre demasiado largo");
    } else {
      return nombre;
    }
    return null;
  }
}

function solicitarNota() {
  let nota = prompt("Digite la nota del estudiante");

  if (nota === null) {
    alert("Valor de nota nulo");
  } else {
    nota = nota.trim();

    if (!nota) {
      console.log("Caracter invalido - vacio o nulo");
    } else if (isNaN(nota)) {
      console.log("Caracter invalido - Solo se permite numeros");
    } else {
      nota = Number(nota);
      if (nota >= 0 && nota <= 100) {
        return nota;
      } else {
        console.log("Valor invalido - La nota debe estar entre 0 y 100");
      }
    }
  }
  return null;
}

function clasificarNota(nombre, nota) {
  let letra;
  if (nota >= 90) {
    letra = "A";
  } else if (nota >= 80) {
    letra = "B";
  } else if (nota >= 70) {
    letra = "C";
  } else if (nota >= 60) {
    letra = "D";
  } else {
    letra = "F";
  }
  alert("El estudiante: " + nombre + " tiene como nota: " + letra);
}

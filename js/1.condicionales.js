/* 
let nombre = prompt("Digite el nombre del estudiante");



if (isNaN(nombre)) {
  if (nombre.length <= 50) {
    let nota = prompt("Digite la nota del estudiante");
    if (!isNaN(nota)) {
      if (nota === "") {
        console.log("Caracter invalido - vacio");
      } else if (nota >= 0 && nota <= 100) {
        if (nota >= 90 && nota <= 100) {
          alert("El estudiante: " + nombre + " tiene como nota: A");
        } else if (nota <= 89 && nota >= 80) {
          alert("El estudiante: " + nombre + " tiene como nota: B");
        } else if (nota <= 79 && nota >= 70) {
          alert("El estudiante: " + nombre + " tiene como nota: C");
        } else if (nota <= 69 && nota >= 60) {
          alert("El estudiante: " + nombre + " tiene como nota: D");
        } else if (nota <= 59 && nota >= 0) {
          alert("El estudiante: " + nombre + " tiene como nota: F");
        }
      } else {
        console.log("Valor invalido");
      }
    } else {
      console.log("Caracter invalido - Solo se permite numeros");
    }
  } else {
    console.log("Valor invalido");
  }
} else if (nombre === "") {
  console.log("Caracter invalido - vacio");
} else if (nombre == null) {
  console.log("Valor nulo");
} else {
  console.log("Caracter invalido - numeros no permitidos" + nombre);
}
event.preventDefault();
 */

/* function solicitarNombre() {
  let nombre = prompt("Digite el nombre del estudiante").trim();

  if (!nombre) {
    console.log("Valor nulo o vacio");
  } else if (!isNaN(nombre)) {
    console.log("No se permite numeros en esta seccion");
  } else if (nombre > 50) {
    console.log("Caracter demasiado largo");
  } else {
    return nombre;
  }
  return null;
}

function solicitarNota() {
  let nota = prompt("Digite la nota del estudiante").trim();

  if (!nota) {
    console.log("Valor nulo o vacio");
  } else if (isNaN(nota)) {
    console.log("Caracter invalido - Solo numeros");
  } else {
    nota = Number(nota);
    if (nota < 0 && nota > 100) {
      console.log("No cumple con los limites establecidos 0 a 100");
    } else {
      return nota;
    }
  }
  return null;
}

function clasificarNota(nombre, nota) {
  let letra;

  if (nota > 89) {
    letra = "A";
  } else if (nota > 79) {
    letra = "B";
  } else if (nota > 69) {
    letra = "C";
  } else if (nota > 59) {
    letra = "C";
  } else {
    letra = "F";
  }
  console.log("El estudiante + " + nombre + "Tiene como nota: " + nota);
}

nombre = solicitarNombre();

if (nombre) {
  nota = solicitarNota();

  if (nota) {
    clasificarNota(nombre, nota);
  }
}
 */

function solicitarNombre() {
  let nombre = prompt("Digite el nombre del estudiante").trim();

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

function solicitarNota() {
  let nota = prompt("Digite la nota del estudiante").trim();

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

// Lógica principal
let nombre = solicitarNombre();
if (nombre) {
  let nota = solicitarNota();
  if (nota !== null) {
      clasificarNota(nombre, nota);
  }
}
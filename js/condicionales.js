/* Programa de notas */
/* 1) Solicitar nombre */


let nombre = prompt("Digite el nombre del estudiante");

/* 1.1) Validar que no sea int */

if (isNaN(nombre)) {
  if (nombre.length <= 50) {
    let nota = prompt("Digite la nota del estudiante");
    if (!isNaN(nota)) {
      if (nota === "") {
        console.log("Caracter invalido - vacio");
      } else if (nota >= 0 && nota <= 100) {
        if (nota >= 90 && nota <= 100) {
          alert("El estudiante: " + nombre + " tiene como nota: A");
        }
      } else {
        console.log("Valor invalido");
      }
    } else {
      console.log("Caracter invalido - Solo se permite numeros");
    }
  }
} else if (nombre === "") {
  console.log("Caracter invalido - vacio");
} else if (nombre == null) {
  console.log("Valor nulo");
} else {
  console.log("Caracter invalido - numeros no permitidos" + nombre);
}
event.preventDefault();
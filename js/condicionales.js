/* Programa de notas */
/* 1) Solicitar nombre */
let nombre = prompt("Digite el nombre del estudiante");

/* 1.1) Validar que no sea int */

if (isNaN(nombre)) {
  if (nombre.length <= 50) {
    let nota = prompt("Digite la nota del estudiante");

    if (Number(nota && nota == 0)) {
      console.log("Buena esa");
    } else if (nota === "") {
      console.log("Caracter invalido - vacio");
    }
  }
} else if (nombre == 0) {
  console.log("Caracter invalido - vacio");
} else {
  console.log("Caracter invalido - numeros no permitidos");
}

/*Pasos para realizar el programa

1) Pedir el nombre
1.1) Validar que el nombre sea tipo string (Check)
1.2) Validar que el nombre no sea tan largo (Check)
1.3) Validar que el nombre no este vacio (Check)
1 RTA) Si se cumple se guarda el nombre (Check)

2)Pedir la nota
2.1) Validar que la nota sea tipo number o int
2.2) Validar que el valor no sea vacio
2.3) Validar que no sobrepase a 100 o sea menor a 0
2 RTA) Si se cumple se guarda la nota

3) Comparar los valores de la nota
3.1) De 90 a 100 es A
3.2) De 80 a 89 es B
3.3) De 70 A 79 es C
3.4) De 60 a 69 es D
3.5) De 0 a 59 es F
3 RTA) Mostar el nombre y valor de nota en letras

*/

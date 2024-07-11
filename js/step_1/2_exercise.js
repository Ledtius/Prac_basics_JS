/* Ejercicio 2: Cálculo de edad
Crea una función que solicite al usuario ingresar su fecha de nacimiento en formato "dd/mm/yyyy" y calcule su edad. Asegúrate de validar que el formato de la fecha sea correcto y que la fecha ingresada sea válida. */

function fechaNacimiento() {
  let fecha = prompt("Digite su fecha de nacimiento");

  if (fecha === null) {
    alert("Proceso cancelado");
    return;
  }
 
  fecha = fecha.trim();

  if (!fecha) {
    alert("Valor invalido - vacio o nulo");
  } else if (isNaN(fecha.substring(0, 2))) {
    alert("Caracter invalido - Solo se aceptan numeros");
  } else if (fecha.substring(2, 3) != "/") {
    alert("Caracter invalido - Debe anexar '/'");
  } else if (isNaN(fecha.substring(3, 5))) {
    alert("Caracter invalido - Solo se aceptan numeros");
  } else if (fecha.substring(5, 6) != "/") {
    alert("Caracter invalido - Debe anexar '/'");
  } else if (isNaN(fecha.substring(6, 10))) {
    alert("Caracter invalido - Solo se aceptan numeros");
  } else {
    let dia = Number(fecha.substring(0, 2));

    let mes = Number(fecha.substring(3, 5));

    let año = Number(fecha.substring(6, 10));

    if (dia > 31 || dia < 1) {
      alert("Numero de dia invalido");
    } else if (mes > 12 || mes < 1) {
      alert("Numero de mes invalido");
    } else if (año > 2024 || año < 1) {
      alert("Numero de año invalido");
    } else {
      const añoActual = 2024;
      const mesActual = 7;
      const diaActual = 10;

      let edad = añoActual - año;

      if (0 == mesActual - mes) {
        if (0 == diaActual - dia) {
          alert("La edad que posee es: " + edad + " años");
        } else {
          alert(
            "La edad que posee es: " + (edad - 1) + " años"
          );
        }
      } else {
        alert(
          "La edad que posee es: " + (edad - 1) + " años"
        );
      }
    }
  }
}

fechaNacimiento();

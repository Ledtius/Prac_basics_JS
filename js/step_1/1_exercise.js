/* Ejercicio 1: Validación de correo electrónico
Crea una función que solicite al usuario ingresar su correo electrónico y verifique que cumpla con el formato básico de un correo (que contenga un "@" y un "."). Si no es válido, muestra un mensaje de error. */

function email() {
  let email = prompt("Escriba su email");
  if (email === null) {
    alert("Operacion cancelada");
  }

  email = email.trim();
  if (!email) {
    alert("Valor nulo o vacio");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Valor invalido - Debe tener '@' y '.'");
  } else if (email.length < 10) {
    alert("Email demaciado corto");
  } else if (email.length > 50) {
    alert("Email demaciado largo");
  } else {
    alert("Email guardado correctamente");
  }
}

email();

/* Ejercicio 4: Validación de contraseña
Crea una función que solicite al usuario ingresar una contraseña y verifique que cumpla con los siguientes criterios: al menos 8 caracteres, contenga al menos una letra mayúscula, una letra minúscula, un número y un carácter especial. Muestra mensajes de error específicos si no se cumplen estos criterios. */

function password() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

  let password = prompt("Writing your password");

  if (password === null) {
    alert("cacelled operation");
    return;
  }

  password = password.trim();

  if (!password) {
    alert("Value is empty or null");
  } else if (!password.match(/^.{8,}$/)) {
    alert("Your password is too short");
  } else if (!password.match(/^(?=.*[A-Z]).+$/)) {
    alert("Your password doesn't have uppercase");
  } else if (!password.match(/^(?=.*[a-z]).+$/)) {
    alert("Your password doesn't have lowercase");
  } else if (!password.match(/^(?=.*\d).+$/)) {
    alert("Your password doesn't have digit");
  } else if (!password.match(/^(?=.*[@$!%*?&.]).+$/)) {
    alert("Your password doesn't have special simbol");
  } else {
    alert("Password saved");
  }
}
password();

/* Ejercicio 4: Validación de contraseña
Crea una función que solicite al usuario ingresar una contraseña y verifique que cumpla con los siguientes criterios: al menos 8 caracteres, contenga al menos una letra mayúscula, una letra minúscula, un número y un carácter especial. Muestra mensajes de error específicos si no se cumplen estos criterios. */

function password() {
  let password = prompt("Writing your password");

  if (password === null) {
    alert("cacelled operation");
    return;
  }
  
  password = password.trim();

  alert(password.match(aaa));
/*   if(){


  } */

  alert(password.toUpperCase()/* password.substring(0,password.length).u */);
  if (!password) {
    alert("Value is empty or null");
  } else if (password.length < 8) {
    alert("Your password is too short");
  } else if (password == password.toUpperCase()) {
    alert("Is upercase: " + password);
  } else if (password == password.toLowerCase()) {
    alert("Is lowercase: " + password);
  }
}
password();

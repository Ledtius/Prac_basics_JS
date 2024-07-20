/* Ejercicio 3: Adivina el Número
Desarrolla una función en la que el programa elija un número aleatorio entre 1 y 100. Luego, utiliza un bucle while para pedir al usuario que adivine el número. Después de cada intento, informa al usuario si el número ingresado es menor o mayor que el número aleatorio hasta que adivine correctamente. */

function random() {
  //Numero aleatore
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  let userNumber = 0;

  while (userNumber != randomNumber) {
    userNumber = prompt("Writing number");

    if (userNumber === null) {
      alert("Cancelled operation");
      return;
    }

    userNumber = userNumber.trim();

    if (!userNumber) {
      alert("Value null or empty");
    } else if (isNaN(userNumber)) {
      alert("Invalid format - numbers only");
    } else if (userNumber > 100 || userNumber < 1) {
      alert("Value too hight - 1 to 100");
    } else {
      userNumber = Number(userNumber);

      if (randomNumber > userNumber) {
        alert("More highter");
      } else if (randomNumber < userNumber) {
        alert("More lower");
      } else {
        alert("Mision complete!");
      }
    }
  }
}

random();

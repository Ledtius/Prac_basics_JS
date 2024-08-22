/* **Generar una tabla de multiplicar**:
    
    - Escribe un programa que genere la tabla de multiplicar completa (del 1 al 10) para cualquier número ingresado por el usuario. Asegúrate de que el usuario solo ingrese un número válido. */

let validation = function () {
  let value = prompt(
    "Multiplication tables\n Writing the number that you like create a table"
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
  }

  return parseFloat(value);
};

let multiplication = function () {
  let userNumber = validation();

  if (userNumber !== undefined) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${userNumber} x ${i} = ${userNumber * i}`);
    }
  }
};

multiplication();

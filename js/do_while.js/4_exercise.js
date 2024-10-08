/* ### Ejercicio 4: Menú interactivo

Crea un programa que muestre un menú con varias opciones al usuario (por ejemplo, "1. Opción 1", "2. Opción 2", "3. Salir"). El programa debe seguir mostrando el menú y solicitando una opción hasta que el usuario elija la opción de salir. */

let validation = function () {
  let value = prompt(
    "Menu\n-Press '1' to print Today's date\n-Press '2' to resolve a sum\n-Press '3' to exit"
  );

  if (value === null) {
    alert("Cancelled opertation");
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

  return value;
};

function menu() {
  let valueMenu = 0;

  do {
    valueMenu = validation();

    switch (valueMenu) {
      case "1":
        let date = new Date();
        alert(`Today's date is\n${date}`);
        break;
      case "2":
        alert(`2 + 2 = ${2 + 2}`);
        break;
      case "3":
        alert("Exit");
        valueMenu = undefined;
        break;
      case undefined:
        break;
      default:
        alert("This option not exist");
        break;
    }
  } while (valueMenu !== undefined);
}

menu();

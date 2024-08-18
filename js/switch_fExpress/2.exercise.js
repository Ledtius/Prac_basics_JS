/* **Calcular el Mes**  
    Crea una función que solicite al usuario un número del 1 al 12 y muestre el nombre del mes correspondiente. Usa un `switch` para determinar el mes basado en el número ingresado. */

let month = function () {
  let verification = function () {
    let value = prompt("Writing a number in range of 1 to 12");

    if (value === null) return;

    value = value.trim();

    if (!value) {
      alert("Null or empty value");
      return;
    } else if (isNaN(value)) {
      alert("Invalid value - numbers only");
      return;
    } else if (value < 0 || value > 12) {
      alert("Invalid value range");
      return;
    }

    return value;
  };

  let month = verification();

  switch (month) {
    case "1":
      alert("January");
      break;
    case "2":
      alert("February");
      break;
    case "3":
      alert("March");
      break;
    case "4":
      alert("April");
      break;
    case "5":
      alert("May");
      break;
    case "6":
      alert("June");
      break;
    case "7":
      alert("July");
      break;

    case "8":
      alert("August");
      break;
    case "9":
      alert("September");
      break;
    case "10":
      alert("October");
      break;
    case "11":
      alert("November");
      break;
    case "12":
      alert("December");
      break;
    default:
      alert("This month not exist");
      break;
  }
};

month();

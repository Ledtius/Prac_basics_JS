/* 1. **Días de la Semana**  
    Escribe una función que pida al usuario ingresar un número del 1 al 7 y muestre el nombre del día de la semana correspondiente. Utiliza un `switch` para manejar los diferentes números. */

let daysWeek = function () {
  let validation = function () {
    let value = prompt("Writing the number of the day of the week");

    if (value === null) return;

    value = value.trim();

    if (!value) {
      alert("Null or empty value");
      return;
    } else if (isNaN(value)) {
      alert("Invalid value - numbers only");
      return;
    } else if (value < 1 || value > 7) {
      alert("Invalid value - range 1 - 7");
      return;
    }

    return value;
  };

  let day = validation();

  console.log(day);

  switch (day) {
    case "1":
      alert("Monday");
      break;
    case "2":
      alert("Tuesday");
      break;
    case "3":
      alert("Wednesday");
      break;
    case "4":
      alert("Thursday");
      break;
    case "5":
      alert("Friday");
      break;
    case "6":
      alert("Saturday");
      break;
    case "7":
      alert("Sunday");
      break;
    default:
      alert("Not exist this day in the week");
  }
};

daysWeek();

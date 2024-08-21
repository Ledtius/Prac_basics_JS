/* **Mensaje de Saludo**  
    Desarrolla una función que tome una hora en formato de 24 horas (por ejemplo, 9 para 9 AM) y devuelva un saludo apropiado basado en el momento del día (por ejemplo, "Buenos días", "Buenas tardes", "Buenas noches"). Utiliza un `switch` para decidir el saludo basado en la hora ingresada. */

let verification = function () {
  let value = prompt("Writing a hour of the day");

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
  } else if (value < 0 || value > 23) {
    alert("Invalid range of the hours of day");
    return;
  }
  if (value % 1 != 0) {
    return Number(Math.floor(value))
  }

  return Number(value);
};

let greetingDay = function (hours) {
  switch (true) {
    case hours > 1 && hours <= 11:
      alert("Good morning");
      break;
    case hours > 11 && hours <= 15:
      alert("Good afternoon");
      break;
    case hours > 15 || hours == 0:
      alert("Good evening");
      break;
  }
};

greetingDay(verification());

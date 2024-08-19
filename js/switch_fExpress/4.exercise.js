/* Conversor de Moneda**  
    Crea una función que convierta una cantidad de dinero de una moneda a otra basada en una opción seleccionada por el usuario. Por ejemplo, convertir de USD a EUR, GBP, o JPY. Usa un `switch` para manejar las diferentes conversiones de moneda. */

let validation = function () {
  let userValue = prompt("Writing the USD that you want converter");

  if (userValue === null) {
    alert("Cancelled operation");
    return;
  }

  userValue = userValue.trim();

  if (!userValue) {
    alert("Null or empty value");
    return;
  } else if (isNaN(userValue)) {
    alert("Invalid value - numbers only");
    return;
  } else if (userValue < 0) {
    alert("Invalid value - numbers more highter than 0");
    return;
  }

  return parseFloat(userValue);
};

let choice = function () {
  let choiceV = prompt(
    "Choice the currency to change\nPress '1': USD to EUR\nPress '2': USD to GBP\nPress '3': USD to JPY"
  );

  if (choiceV === null) {
    alert("Cancelled choice");
    return;
  }

  choiceV = choiceV.trim();

  if (!choiceV) {
    alert("Enpty or null value");
    return;
  } else if (isNaN(choiceV)) {
    alert("Numbers only");
    return;
  }

  return choiceV;
};

let currencyConverter = function (value, choice) {
  if (value === undefined) {
    c;
  }
  switch (choice) {
    case "1":
      let usdToEur = 0.907804;
      alert(`${value}$ is equal ${value * usdToEur}$ EUR `);
      break;
    case "2":
      let usdToGbp = 0.773008;
      alert(`${value}$ is equal ${value * usdToGbp}$ GBP`);
      break;

    case "3":
      let usdToJpy = 147.612;
      alert(`${value}$ is equal ${value * usdToJpy}$ JPY `);
      break;

    default:
      alert("Not exist this case");
      break;
  }
  return;
};

let x = validation();

if (x != undefined) {
  let y = choice();
  if (y != undefined) {
    currencyConverter(x, y);
  }
}

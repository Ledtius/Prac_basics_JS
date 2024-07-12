/*Ejercicio 3: Conversión de moneda
Crea una función que solicite al usuario ingresar una cantidad en dólares y convierta esa cantidad a euros. Usa una tasa de conversión fija (por ejemplo, 1 USD = 0.85 EUR). Asegúrate de validar que el valor ingresado sea un número válido.*/

function usdBecomeEur() {
  let dolar = prompt("Writing your dollars here");

  if (dolar === null) {
    alert("Cancel operation");
    return;
  }

  dolar = dolar.trim();

  if (!dolar) {
    alert("Null or void value");
  } else if (isNaN(dolar)) {
    alert("Invalid value");
  } else {
    const usdToEur = 0.85;

    alert("Your USD's in EURS is: $" + usdToEur * dolar);
  }
  return;
}

usdBecomeEur();


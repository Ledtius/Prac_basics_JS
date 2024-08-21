let verification = function () {
  let value = prompt(
    "Plus of the positive numbers\n\nWriting a positive number for plus:"
  );

  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return;
  } else if (isNaN(value)) {
    alert("Invalid value - numbers only");
    return;
  } else if (value < 0) {
    alert("Invalid value - positive numbers only");
    return;
  }

  return parseFloat(value);
};

let plusNummberP = function (valueRight) {
  if (valueRight === undefined) return;

  let otherValue = verification();

  if (otherValue === undefined) return;

  do {
    valueRight = valueRight + otherValue;

    otherValue = verification();
    if (otherValue === undefined) break;
  } while (valueRight > 0);

  alert(valueRight);
};

plusNummberP(verification());



//Correccion CHatGPT
/* let verification = function () {
  let value = prompt("Plus of the positive numbers\n\nWrite a positive number:");

  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return null;
  } else if (isNaN(value)) {
    alert("Invalid value - numbers only");
    return null;
  } else if (value < 0) {
    return null; // Retorna null para indicar que se ingresa un número negativo o no válido.
  }

  return parseFloat(value);
};

let plusNumberP = function () {
  let sum = 0;
  let value;

  do {
    value = verification();

    if (value !== null) {
      sum += value;
    }
  } while (value !== null);

  alert("The total sum is: " + sum);
};

plusNumberP();
 */
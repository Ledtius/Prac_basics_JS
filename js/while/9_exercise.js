/* Factorial
Escribe una función que calcule el factorial de un número positivo ingresado por el usuario. Usa un bucle while para realizar el cálculo del factorial. */

// This function is not create by me
// Is of Internet
function gamma(x) {
  var p = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];

  var g = 7;
  if (x < 0.5) {
    return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  }

  x -= 1;
  var a = p[0];
  var t = x + g + 0.5;
  for (var i = 1; i < p.length; i++) {
    a += p[i] / (x + i);
  }

  return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
}

//My function
function factorial() {
  function validation() {
    let num = prompt("Writing a positive number");

    if (num === null) {
      alert("Cancelled operation");
      return;
    }

    num = num.trim();

    if (!num) {
      alert("Empty or null value");
    } else if (isNaN(num)) {
      alert("Numbers only");
    } else {
      num = Number(num);
      if (num < 0) {
        alert("No negative numbers");
        return;
      }

      return num;
    }
  }

  let regEx = /^\d*\.\d+$/;

  let userNumber = validation();

  console.log((userNumber % 1));
  
  if (regEx.test(userNumber) === true) {
    userNumber = userNumber + 1;

    
    gammaValue = gamma(userNumber);

    alert(`The value of the factorial is: ${gammaValue}`);
    return;
  }

  if (userNumber === undefined) {
    return;
  }

  let secondNumber = userNumber - 1;

  while (secondNumber != 1) {
    userNumber = userNumber * secondNumber;

    secondNumber = secondNumber - 1;
  }

  alert(`The value of the factorial is: ${userNumber}`);
}

factorial();

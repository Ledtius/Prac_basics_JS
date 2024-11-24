/* - **Sumar dígitos de un número**:
    
    - Escribe un programa que sume todos los dígitos de un número entero positivo ingresado por el usuario. Por ejemplo, si el usuario ingresa `1234`, el programa debe devolver `10` (1 + 2 + 3 + 4 = 10).
*/

let validation = function () {
  let value = prompt(
    "Sum of digits of a one number\n\nWriting a positive integer:"
  );

  if (value === null) {
    alert("Cancelled operation");
    return;
  }

  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return;
  }

  if (isNaN(value)) {
    alert("Invalid value - numbers only");
    return;
  } else if (value < 0) {
    alert("Positivie numbers only");
    return;
  } else if (value % 1 != 0) {
    alert("Integer numbers only");
    return;
  }

  return value;
};

let strangeSum = function () {
  let listNum = validation();
  let ope = 0;
  let x = 0;
  let y = 0;

  if (listNum === undefined) return;

  let array = listNum.split("");

  for (let i = 0; i < listNum.length; i++) {
    x = Number(listNum[i]);
    y = Number(listNum[(i += 1)]);

    console.log(`x: ${x}\ny: ${y}`);

    // This condicion help me to even numbers when you dont write
    if (!y) {
      y = 0;
    }

    ope += x + y;
    console.log(`ope: ${ope}\ni: ${i}`);
  }
  alert(`The sum of:\n${array.join(" + ")} is = ${ope}`);

};

strangeSum();

/*   // Convertimos cada carácter del string a número y lo sumamos
  for (let i = 0; i < listNum.length; i++) {
    sum += Number(listNum[i]);
  }
 */
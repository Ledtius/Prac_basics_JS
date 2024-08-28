/* - **Sumar dígitos de un número**:
    
    - Escribe un programa que sume todos los dígitos de un número entero positivo ingresado por el usuario. Por ejemplo, si el usuario ingresa `1234`, el programa debe devolver `10` (1 + 2 + 3 + 4 = 10).
*/

let validation = function () {
  let value = prompt(
    "Sum of digits of a one number\n\nWriting a positive integer"
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
  //Pares y impares?
  let listNum = validation();
  let ope = 0;
  let x = 0;
  let y = 0;
  let large = listNum.length;

  if (listNum === undefined) return;

  console.log(large);
  for (let i = 0; i < large; i++) {
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
};

strangeSum();

/* 
  for (let i = 0; i <= valueSum.length; i++) {
    operation += Number(valueSum[i]);
    console.log(`Operation 1: ${operation}`);
    operation = Number(valueSum[i]) + Number(valueSum[(i = +1)]);

    console.log(`Operation 2: ${operation}`);
  }

 */

/* 

  for (let i = 0; i <= valueSum.length; i += 1) {
    let ope1 = Number(valueSum[count]);
    let ope2 = Number(valueSum[(count += 1)]);

    console.log(`x: ${x}\ncount:${count}\ni: ${i}`);

    console.log(
      `${x} =+ ${Number(valueSum[i])}: ${(x += Number(valueSum[i]))} `
    );

    console.log(`x = ${x}\nope1 = ${ope1}\nope2 = ${ope2} `);

    x = ope1 + ope2;

    console.log(`x: ${ope1} + ${ope2}`);
    console.log("-------------------");

    if (!x) i = 10;

  }
*/

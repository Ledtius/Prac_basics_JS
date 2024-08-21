/* Crea un programa que solicite una contraseña al usuario. El programa debe seguir pidiendo la contraseña hasta que el usuario ingrese la correcta. Una vez que la contraseña sea correcta, el programa debe mostrar un mensaje de bienvenida. */

let validation = function () {
  let password = prompt(
    "Acount of 'VisualPolitic'\n\nWrting the new password:"
  );

  if (password === null) {
    alert("Cancelled operation");
    return;
  } else if (!password) {
    alert("Null or empty value");
    return;
  }
  return password;
};

let passwordFunction = function () {
  //Const
  const regexMinE = /^.{8,15}$/;
  const regexUpp = /(?=.*[A-Z])/;
  const regexLowercase = /(?=.*[a-z])/;

  const regexMinNum = /(?=.*\d)/;
  const regexNotSp = /^\S*$/;
  const regexSpChar = /(?=.*[@.$!%*?&#])/;

  let key = true;

  do {
    let password = validation();

    if (password !== undefined) {
      if (regexMinE.test(password) === false) {
        alert("Minimun 8 characters in the password");
      }
      if (regexUpp.test(password) === false) {
        alert("Minimun 1 uppercase characters in the password");
      }
      if (regexLowercase.test(password) === false) {
        alert("Minimun 1 lowercase characters in the password");
      }
      if (regexMinNum.test(password) === false) {
        alert("Minimun 1 number characters in the password");
      }
      if (regexNotSp.test(password) === false) {
        alert("Not spaces in the password");
      }
      if (regexSpChar.test(password) === false) {
        alert("Miniun 1 special characters in the password");
      } else {
        alert("Your password is strong!");
        key = false;
      }
    } else {
      key = false;
    }
  } while (key);
};

passwordFunction();

//ChatGPT corrections
/*  let validation = function () {
  let password = prompt("Account of 'VisualPolitic'\n\nEnter the new password:");

  if (password === null) {
    alert("Cancelled operation");
    return;
  } else if (!password.trim()) { // Se asegura de que la contraseña no esté vacía o solo con espacios en blanco
    alert("Null or empty value");
    return;
  }
  return password;
};

let passwordFunction = function () {
  // Regex Patterns
  const regexMinE = /^.{8,15}$/;
  const regexUpp = /(?=.*[A-Z])/;
  const regexLowercase = /(?=.*[a-z])/;
  const regexMinNum = /(?=.*\d)/;
  const regexNotSp = /^\S*$/;
  const regexSpChar = /(?=.*[@.$!%*?&#])/;

  let isValid = false;

  do {
    let password = validation();

    if (password !== undefined) {
      let errors = [];

      if (!regexMinE.test(password)) {
        errors.push("Minimum 8 characters in the password.");
      }
      if (!regexUpp.test(password)) {
        errors.push("Minimum 1 uppercase letter in the password.");
      }
      if (!regexLowercase.test(password)) {
        errors.push("Minimum 1 lowercase letter in the password.");
      }
      if (!regexMinNum.test(password)) {
        errors.push("Minimum 1 number in the password.");
      }
      if (!regexNotSp.test(password)) {
        errors.push("No spaces allowed in the password.");
      }
      if (!regexSpChar.test(password)) {
        errors.push("Minimum 1 special character in the password.");
      }

      if (errors.length > 0) {
        alert("Password requirements not met:\n" + errors.join("\n"));
      } else {
        alert("Your password is strong!");
        isValid = true;
      }
    } else {
      isValid = true; // Finaliza el bucle si la operación es cancelada
    }
  } while (!isValid);
};

passwordFunction();
*/

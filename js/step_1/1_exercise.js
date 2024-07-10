function email() {
  let email = prompt("Escriba su email");
  if (email === null) {
    alert("Operacion cancelada");
  }

  email = email.trim();
  if (!email) {
    alert("Valor nulo o vacio");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Valor invalido - Debe tener '@' y '.'");
  } else if (email.length < 10) {
    alert("Email demaciado corto");
  } else if (email.length > 50) {
    alert("Email demaciado largo");
  } else {
    alert("Email guardado correctamente");
  }
}

email();

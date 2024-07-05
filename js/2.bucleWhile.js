let numerosIng = function sumaNumIngresados() {
  let numero = prompt("Digite el numero a sumar").trim();

  if (!numero) {
    alert("Numero vacio o nulo");
  } else if (isNaN(numero)) {
    alert("Caracter invalido - Solo se acepta numeros");
  } else {
    if (numero > 0) {
      return;
    }
  }

  console.log("Saliste?");
};

console.log(numerosIng());

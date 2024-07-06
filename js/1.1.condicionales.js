function solicitarEdad() {
  let edad = prompt("Digite la edad del usuario");
  if (edad === null) {
    alert("Operacion cancelada");
  } else {
    edad = edad.trim();
    if (!edad) {
      alert("Valor de edad vacío o nulo");
    } else if (isNaN(edad)) {
      alert("Carácter inválido - solo se permiten números");
    } else {
      edad = Number(edad);
      if (edad < 5 || edad > 120) {
        alert("Edad inválida");
      } else {
        return edad;
      }
    }
    return null;
  }
}

function solicitarPais() {
  let pais = prompt("Digite el país del usuario");
  if (pais === null) {
    alert("Operacion cancelada");
  } else {
    pais = pais.trim();

    if (!pais) {
      alert("Valor de país vacío o nulo");
    } else if (!isNaN(pais)) {
      alert("Carácter inválido - solo se permiten letras");
    } else if (pais.length < 2) {
      alert("Nombre del país demasiado corto");
    } else {
      return pais;
    }
    return null;
  }
}

function recomendarPeliculas(edad, pais) {
  if (edad >= 5 && edad <= 12) {
    alert("Película para infantes");
  } else if (edad >= 13 && edad <= 17) {
    alert("Película para adolescentes");
  } else {
    alert("Película para adultos");
  }
  if (pais.toLowerCase() === "colombia") {
    alert("Puede ver: El abrazo de la serpiente, El olvido que seremos, etc.");
  }
}

function programaRecomendacionPeliculas() {
  let edad = solicitarEdad();
  if (edad) {
    let pais = solicitarPais();
    if (pais) {
      recomendarPeliculas(edad, pais);
    }
  }
}

programaRecomendacionPeliculas();

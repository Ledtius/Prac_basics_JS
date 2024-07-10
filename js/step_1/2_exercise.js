function fechaNacimiento() {
  let fecha = prompt("Escriba su fecha de nacimeinto");

  if (isNaN(fecha.substring(0, 1))) {
    alert("No es un numero");
    alert(fecha.substring(0, 1));
// 12345678910
// dd/mm/yyyy
  } else {
    alert("Es un numero");
    if (fecha.substring(0,2) === "/" && fecha.substring(5,6) === "/") {
        alert("Bien " + fecha);
    }
  }

  /* 
  if (fecha === null) {
    alert("Proceso cancelado");
    return;
  }

  fecha = fecha.trim();

  if (!fecha) {
    alert("Valor vacio o nulo");
  } else if (
    !fecha.includes("/") ||
    fecha.indexOf("/") > fecha.indexOf("/") + 2
  ) {
    alert(" Fecha invalida - La fecha se debe de escribir 'dd/mm/yyyy'");
  } else {
    let compararFecha = 2024;
    if (fecha.substring() >)  {
    }
  }*/
}
fechaNacimiento();

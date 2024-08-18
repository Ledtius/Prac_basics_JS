/* **Evaluación de Nota**  
Desarrolla una función que tome una calificación de 0 a 100 y devuelva una calificación de letra basada en el rango. Por ejemplo, A para 90-100, B para 80-89, etc. Usa un `switch` para asignar la calificación de letra según el rango de notas. */

let score = function () {
  let validation = function () {
    let value = prompt("Writing score of the student ");

    if (value === null) return;

    value = value.trim();

    if (!value) {
      alert("Null or empty value");
      return;
    } else if (isNaN(value)) {
      alert("Invalid value - numbers only");
    } else if (value < 0 || value > 100) {
      alert("Invalid range of score");
      return;
    }

    return Number(value);
  };

  let score = validation();

  switch (true) {
    case score <= 100 && score >= 90:
      alert("A");
      break;
    case score <= 89 && score >= 80:
      alert("B");
      break;
    case score <= 79 && score >= 70:
      alert("C");
      break;
    case score <= 69 && score >= 60:
      alert("D");
      break;
    default:
      alert("F");
      break;
  }
};

score();

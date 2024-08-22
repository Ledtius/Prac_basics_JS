let validation = function () {
  let value = prompt("Count of vowels\n Writing a word");

  if (value === null) {
    alert("Cancelled operation");
    return;
  }
  value = value.trim();

  if (!value) {
    alert("Null or empty value");
    return;
  } else if (!isNaN(value)) {
    alert("Invalid value - letters only");
    return;
  }

  return value;
};

let countVowels = function () {
  let word = "";
  let count = 0;
  let regex = /[aeiouAEIOU]/g;

  do {
    word = validation();

    if (word !== undefined) {
      alert(`The numbers of vowels is: ${word.match(regex).length}`);
    }
  } while (word !== undefined);
};

countVowels();

/*   do {
    let word = validation();

    console.log(word);

    if (word !== undefined) {
        console.log(word);
      let arrayVowels = word.match(regex);

      console.log(arrayVowels.length);
    } 
    console.log(word)
  } while (word === undefined);
  console.log(word); */

let validation = function (promptMessage) {
  let number = prompt(promptMessage);

  if (number === null) {
    alert("Cancelled operation");
    return;
  }

  number = number.trim();

  if (!number) {
    alert("Null or empty value");
    return;
  } else if (isNaN(number)) {
    alert("Invalid value - numbers only");
    return;
  } else if (number < 0) {
    alert("Positive values only");
    return;
  } else if (number % 1 !== 0) {
    alert("Invalid value - This value is not an integer");
    return;
  }

  return Number(number);
};

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function primeNumbers() {
  let firstNumber = validation("Prime numbers generator\n\nWriting the beginning range of the prime numbers");
  if (firstNumber === undefined) return;

  let secondNumber = validation("Prime numbers generator\n\nWriting the ending range of the prime numbers");
  if (secondNumber === undefined) return;

  if (firstNumber > secondNumber) {
    alert("The first value is greater than the second");
    return;
  }

  console.log(`Prime numbers between ${firstNumber} and ${secondNumber}:`);

  for (let i = firstNumber; i <= secondNumber; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

primeNumbers();

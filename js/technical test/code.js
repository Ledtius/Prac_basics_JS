const pets = ["dog", "cat", "dog", "bird", "cat", "dog"];
/*
result →
{
  dog: 3,
  cat: 2,
  bird: 1
}
*/

console.log(
  pets.reduce((acc, current, index) => {
    acc[current] = (acc[current] ?? 0) + 1;
    return acc;
  }, {})
);

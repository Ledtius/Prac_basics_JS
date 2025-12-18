const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 },
];
// result → 1350

console.log(
  products.reduce((acc, current) => {
    const { price } = current;

    acc += price;

    return acc;
  }, 0)
);

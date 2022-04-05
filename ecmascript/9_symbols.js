const symbol = Symbol("demo");
const other = Symbol("demo");

console.log(symbol);
console.log(other);

console.log(symbol == other);
console.log(symbol === other);

const obj = {
  name: "Dmitrii",
  demo: "Demo",
  [symbol]: "meta",
};

console.log(obj[symbol]);
console.log(obj[other]);
console.log(obj.demo);

for (const key in obj) {
  console.log(key);
}

const defaultB = 20;
const getDefault = (c) => c * 2;

function compute(a = 20, b = getDefault(a)) {
  return a + b;
}

console.log(compute());

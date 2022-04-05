const array = [10, 20, 30, 40];
const str = "Hello";

// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const iter = str[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (const item of array) {
//   console.log(item);
// }

// const country = {
//   values: ["ru", "en", "de", "es"],
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         const value = this.values[i];
//         i++;
//         return {
//           done: i > this.values.length,
//           value,
//         };
//       },
//     };
//   },
// };

// for (const item of country) {
//   console.log(item);
// }

//Generators
function* gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i;
    } catch (error) {
      console.log("Error", error);
    }
  }
}

const iter = gen(3);
console.log(iter.next());
console.log(iter.next());
console.log(iter.throw("My Error"));
console.log(iter.next());

for (const iterator of gen(4)) {
  console.log(iterator);
}

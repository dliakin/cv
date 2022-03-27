// const title = "Hello";

// const isVisible = () => Math.random() > 0.5;

// const template = `
// ${isVisible() ? `<p>Visible<p>` : ""}
// <h1 id="demo" style="color: red">${title}</h1>`;

// console.log(template);

const str = "Hello";

console.log(str.startsWith("He"));
console.log(str.endsWith("o"));

console.log(str.includes("llo"));

console.log(str.repeat(3));

str.trim();
str.trimEnd();
str.trimStart();

console.log(str.padStart(10, "123"));
console.log(str.padEnd(8, "123"));

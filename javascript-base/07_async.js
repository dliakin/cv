//Event Loop

// const timeout = setTimeout(() => {
//   console.log("After timeout");
// }, 2500);

// clearTimeout(timeout);

// const interval = setInterval(() => {
//   console.log("After interval");
// }, 1000);

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => console.log("After 2 sec"), 2000);

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Что-то пошло не так");
    }, wait);
  });
  return promise;
};

// delay(2500)
//   .then(() => console.log("After 2 sec"))
//   .catch((err) => console.error("Error:", err))
//   .finally(() => console.log("Finally"));

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log("Data:", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

asyncExample();

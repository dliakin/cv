const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Filed ${prop} not found in object`;
  },

  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(
        `Length must be greater than 2 symbols. Now: ${value.length}`
      );
    }
  },
};

const form = {
  login: "tester",
  password: "12345",
};

const formProxy = new Proxy(form, validator);

// console.log(formProxy);

// console.log(formProxy.login);
// console.log(formProxy.password);
// console.log(formProxy["username"]);

// formProxy.password = "12";
// console.log(formProxy.password);

function log(message) {
  console.log("[Log]: ", message);
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.log("Number of elements is not equal");
    }
  },
});

proxy("Custom message");
proxy();
proxy("Message", 2);

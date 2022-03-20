// window.alert("1");
// window.confirm("Go next?");

const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2");
// const heading2 = document.getElementsByClassName("h2-class");
const heading2 = document.querySelector("h2"); //get first element
// console.log(heading2);

const heading3 = heading2.nextElementSibling;
// console.log(heading3);

const h2List = document.querySelectorAll("h2");
// console.log(h2List);

setTimeout(() => {
  addStylesTo(heading, "JavaScript");
}, 1500);

setTimeout(() => {
  addStylesTo(heading2, "Practice", "blue");
}, 3000);

const link = heading3.querySelector("a");
link.addEventListener;

link.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log(event);
  const url = event.target.getAttribute("href");
  console.log(url);
  window.location = url;
});

setTimeout(() => {
  addStylesTo(heading3.children[0], "And get result!", "yellow", "2rem");
}, 4500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
  if (heading.style.color === "red") {
    heading.style.color = "black";
    heading.style.backgroundColor = "white";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "black";
  }
};

heading2.addEventListener("dblclick", () => {
  if (heading2.style.color === "blue") {
    heading2.style.color = "black";
    heading2.style.backgroundColor = "white";
  } else {
    heading2.style.color = "blue";
    heading2.style.backgroundColor = "black";
  }
});

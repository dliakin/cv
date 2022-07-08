const board = document.querySelector("#board");
const colors = ["#C176F0", "#F08BD0", "#99D7F0", "#DEF081", "#9AF08D"];
const SQUARE_NUMBER = 625;

for (let index = 0; index < SQUARE_NUMBER; index++) {
  const square = document.createElement("div");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  square.classList.add("square");
  board.append(square);
}

function setColor(element) {
  const color = getRndColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRndColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

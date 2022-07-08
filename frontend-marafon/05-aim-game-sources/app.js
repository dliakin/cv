const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");

const colors = ["#C176F0", "#F08BD0", "#99D7F0", "#DEF081", "#9AF08D"];

let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRndCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRndCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`;
}

function createRndCircle() {
  const circle = document.createElement("div");
  const size = getRndNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRndNumber(0, width - size);
  const y = getRndNumber(0, height - size);
  const color = getRndColor();
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = color;
  board.append(circle);
}

function getRndNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRndColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

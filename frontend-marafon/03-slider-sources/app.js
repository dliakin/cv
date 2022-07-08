const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeslideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeslideIndex++;
    if (activeslideIndex === slidesCount) {
      activeslideIndex = 0;
    }
  } else if (direction === "down") {
    activeslideIndex--;
    if (activeslideIndex < 0) {
      activeslideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeslideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeslideIndex * height}px)`;
}

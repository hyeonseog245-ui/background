// alert("안녕하세요");
//빈글자
const css = document.querySelector("h3");
//색입력 2개 input
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//getElementById ("id")
const body = document.getElementById("gradient");

function setColor() {
  alert("색을 바꿈!");
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

color1.addEventListener("change", setColor);
color2.addEventListener("change", setColor);
//input, setcolor 이벤트종류 함수

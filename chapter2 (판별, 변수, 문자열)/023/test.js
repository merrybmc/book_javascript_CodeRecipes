const rectangle = document.querySelector(".rectangle");

document.querySelector(".button").addEventListener("click", onClickButton());

function onClickButton() {
  const randomHue = Math.trunc(Math.random() * 360);
  const randomColorStart = `hsl(${randomHue},100%,50%`;
  const randomColorEnd = `hsl(${randomHue + 40},100%,50%)`;

  rectangle.style.setProperty("--start", randomColorStart);
  rectangle.style.setProperty("--end", randomColorEnd);
}

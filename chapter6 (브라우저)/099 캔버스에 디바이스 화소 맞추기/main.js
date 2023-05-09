const dpr = window.devicePixelRatio;
const w = 200;
const h = 200;

const canvas = document.querySelector("canvas");
canvas.width = w * dpr;
canvas.height = h * dpr;
canvas.style.width = w + "px";
canvas.style.height = h + "px";

const context = canvas.getContext("2d");
context.scale(dpr, dpr);
context.fillStyle = "red";
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
context.fill();

document.querySelector(".log").innerHTML = `디바이스의 화소 비율은 ${dpr}입니다.`;

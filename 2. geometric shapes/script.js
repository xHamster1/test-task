var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = window.innerWidth;
var H = 300;

canvas.width = W;
canvas.height = H;

// Квадрат + прямоуцгольник
ctx.strokeStyle = "#000";
ctx.fillStyle = "#F00";
ctx.fillRect(10, 50, 150, 150);
ctx.strokeRect(200, 50, 200, 150);

// Круг
ctx.fillStyle = "#309053";
ctx.beginPath();
ctx.moveTo(600, 35);
ctx.lineTo(735, 200);
ctx.lineTo(465, 200);
ctx.fill();

// Треугольник
ctx.strokeStyle = "#5F0070";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(950, 120, 110, 0, 2 * Math.PI);
ctx.stroke();

// Анимаймия

// Квадрат + пульсация
let square = document.querySelector(".square");
square.addEventListener("click", function () {
  let style = document.createElement("style");
  style.innerHTML = `
    .square::after, .square::before {
    display: block
    }
`;
  document.head.appendChild(style);
});

// Прямоугольник + перемещение
let rectangle = document.querySelector(".rectangle");

rectangle.addEventListener("click", function () {
  rectangle.classList.add("rectangle-animation");
});

//Круг + 3d трансформация
let circle = document.querySelector(".circle");

circle.addEventListener("click", function () {
  circle.classList.add("circle-animation");
});

// Треугольник + вращение
let triangle = document.querySelector(".triangle");

triangle.addEventListener("click", function () {
  triangle.classList.add("triangle-animation");
});

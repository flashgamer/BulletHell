var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
console.log("We tried");

canvas.width = 1080;
canvas.height = 720;

ctx.fillStyle = "rgb(150, 150, 150)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
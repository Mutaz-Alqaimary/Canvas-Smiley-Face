let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

//smiley
context.fillStyle = "yellow";
context.strokeStyle = "black";
context.lineWidth = 5;
context.beginPath();
context.arc(320, 240, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

//eyes
context.fillStyle = "black";
context.beginPath();
context.arc(270, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.arc(370, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

//mouth
context.strokeStyle = "black";
context.lineWidth = 5;
context.beginPath();
context.arc(320, 240, 150, 0, -1 * Math.PI);
context.stroke();
context.closePath();

context.font = "50px Arial Black";
context.fillText("Mutaz", 230, 500);

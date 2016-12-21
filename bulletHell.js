var canvas;
var x = 0;
var y = 0;
var yspeed = 2;
var img;

function preload() {
    //Load images here
    img = loadImage("res/star.png");
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    x = canvas.width / 2;
}

function draw() {
    background(150);
    if (y < canvas.height) {
        //rect(x, y, 10, 10);
        image(img, x, y);
        y += yspeed++ / 2;
    }
}

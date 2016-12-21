var canvas;
var x = 0;
var y = 0;
var yspeed = 2;
var img;
var sprite;

function preload() {
    //Load images here
    img = loadImage("res/star.png");
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    //x = canvas.width / 2;
    sprite = new Sprite({ x: displayWidth / 2, y: 0, src: "res/star.png" });
}

function draw() {
    background(150);
    //if (y < canvas.height) {
    //    //rect(x, y, 10, 10);
    //    image(img, x, y);
    //    y += yspeed++ / 2;
    //}
    sprite.draw();
    if (keyIsDown(LEFT_ARROW))
        sprite.x -= 3;
    if (keyIsDown(RIGHT_ARROW))
        sprite.x += 3;
    if (keyIsDown(UP_ARROW))
        sprite.y -= 3;
    if (keyIsDown(DOWN_ARROW))
        sprite.y += 3;
}

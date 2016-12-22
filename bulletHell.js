var canvas;
var player;
var bullet;
var res = {};

function preload() {
    //Load images here
    res["star"] = loadImage("res/star.png");
    res["bullet"] = loadImage("res/bullet.png");
}

function setup() {
    canvas = createCanvas(windowWidth * 9 / 10, windowHeight * 9 / 10);
    player = new Sprite({
        x: width / 2,
        y: 0,
        //width: 128,
        //height: 128,
        src: "star"
    },
    {
        update: playerUpdate,
        constructor: playerConstructor,
        draw: playerDraw
    });
}

function draw() {

    //Update
    player.update();

    //Draw
    background(100);
    player.draw();
}

function bulletConstructor(params) {
    this.dir = params.dir || createVector(1, 0);
    this.speed = 10;
    this.x = player.x + player.width / 2 - this.width / 2;
    this.y = player.y + player.height / 2 - this.height / 2;
}
function bulletUpdate() {
    this.x += this.dir.x * this.speed;
    this.y += this.dir.y * this.speed;
}
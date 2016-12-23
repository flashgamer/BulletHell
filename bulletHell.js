var canvas;
var player;
var bullet;
var res = {};
var walls = [];

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
        width: 128,
        height: 128,
        src: "star"
    },
    {
        update: playerUpdate,
        constructor: playerConstructor,
        draw: playerDraw
    });

    walls.push(
        new Wall({
            x: 0,
            y: 0,
            width: 128,
            height: 128 * 5,
            color: 'black'
        }, {
        })
        );
}

function draw() {

    //Update
    player.update();

    //Draw
    background(100);
    player.draw();
    for (var i = 0; i < walls.length; i++) {
        walls[i].draw();
    }
}

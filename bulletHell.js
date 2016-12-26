var canvas;
var player;
var bullet;
var res = {};
var walls = [];
var turret;

function preload() {
    //Load images here
    res["star"] = loadImage("res/star.png");
    res["bullet"] = loadImage("res/bullet.png");
    res["turret"] = loadImage("res/turret.png");
    frameRate(60);
}

function setup() {
    canvas = createCanvas(windowWidth * 9 / 10, windowHeight * 9 / 10);
    player = new Sprite({
        x: width / 2,
        y: 0,
        width: 128,
        height: 128,
        speed: 5,
        src: "star"
    },
    {
        update: playerUpdate,
        constructor: playerConstructor,
        draw: playerDraw
    });

    walls.push( new Wall({
            x: 256,
            y: 0,
            width: 128,
            height: 128 * 5,
            color: 'black'
        }, { }) );
    walls.push( new Wall({
            x: 256 * 3,
            y: 128,
            width: 128,
            height: 128 * 5,
            color: 'black'
    }, {}));

    turret = new Sprite({
        x: 0,
        y: 0,
        width: 128,
        height: 128,
        src: "turret"
    },
    {
        update: turretUpdate,
        constructor: turretConstructor,
        draw: turretDraw
    });
}

function draw() {

    //Update
    player.update();
    turret.update();

    //Draw
    background(100);
    player.draw();
    for (var i = 0; i < walls.length; i++) {
        walls[i].draw();
    }
    turret.draw();
}

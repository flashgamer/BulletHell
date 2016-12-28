var canvas;
var player;
var bullet;
var res = {};
var walls = [];
var turrets = [];

function preload() {
    //Load images here
    res["star"] = loadImage("res/star.png");
    res["bullet"] = loadImage("res/bullet.png");
    res["turret"] = loadImage("res/turret.png");
    res["redbullet"] = loadImage("res/redbullet.png");
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
        src: "star",
        numFrames: 4
    },
    {
        update: playerUpdate,
        constructor: playerConstructor
        // draw: playerDraw
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

    turrets.push(new Sprite({
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
    }));
    turrets.push(new Sprite({
        x: 1080,
        y: 512,
        width: 128,
        height: 128,
        src: "turret"
    },
    {
        update: turretUpdate,
        constructor: turretConstructor,
        draw: turretDraw
    }));
}

function draw() {

    //Update
    player.update();
    for (var i = turrets.length - 1; i > -1; i--) {
        turrets[i].update();
    }

    //Draw
    background(100);
    player.draw();
    for (var i = 0; i < walls.length; i++) {
        walls[i].draw();
    }
    for (var i = turrets.length - 1; i > -1; i--) {
        turrets[i].draw();
    }
}

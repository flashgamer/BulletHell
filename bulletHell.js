var canvas;
var player;
var bullet;
var res = {};
var walls = [];
var turrets = [];
var state;

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
    state = "PLAY";
    resetSketch();
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

    if (state == "GAME_OVER") {
        clear();
        background(100);
        g = "Game Over";
        r = "Press R to restart.";
        textSize(72);
        text(g, width / 3, height / 3);
        textSize(60);
        text(r, width / 3 - 40, height / 3 + height / 3);
    }

}

function keyTyped() {
    if (key === 'r') {
        resetSketch();
    }
    if (key === 'g') {
        state = "GAME_OVER";
    }
    return false;
}

function resetSketch() {
    clear();
    player = new Sprite({
        x: width / 2,
        y: 0,
        width: 128,
        height: 128,
        speed: 8,
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
        width: 128 / 2,
        height: 128 / 2,
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
        width: 128 / 2,
        height: 128 / 2,
        src: "turret"
    },
    {
        update: turretUpdate,
        constructor: turretConstructor,
        draw: turretDraw
    }));
}

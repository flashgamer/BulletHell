var canvas;
var sprite;
var bullet;
var res = {};

function preload() {
    //Load images here
    res["star"] = loadImage("res/star.png");
    res["bullet"] = loadImage("res/bullet.png");
}

function setup() {
    canvas = createCanvas(windowWidth * 9 / 10, windowHeight * 9 / 10);
    sprite = new Sprite({
        x: width / 2,
        y: 0,
        //width: 128,
        //height: 128,
        src: "star"
    },
    {
        update: starUpdate,
        constructor: starConstructor,
        draw: starDraw
    });
}

function draw() {

    //Update
    sprite.update();

    //Draw
    background(100);
    sprite.draw();
}

function starConstructor(params) {
    this.bullets = [];
    this.dir = params.dir || createVector(0, 0);
}

function starUpdate() {
    // Deal with input
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && sprite.x > 0) { // Left or 'A'
        this.x -= 3;
        this.dir = createVector(-1, 0);
    }
    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && sprite.width + sprite.x < width) { // Right or 'D'
        this.x += 3;
        this.dir = createVector(1, 0);
    }
    if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && sprite.y > 0) { // Up or 'W'
        this.y -= 3;
        this.dir = createVector(0, -1);
    }
    if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && sprite.height + sprite.y < height) { // Down or 'S'
        this.y += 3;
        this.dir = createVector(0, 1);
    }
    if (keyIsDown(32)) {
        // Create new bullet
        this.bullets.push(
            new Sprite({
                dir: this.dir,
                src: "bullet"
            },
            {
                update: bulletUpdate,
                constructor: bulletConstructor
            })
        );
    }
    
    // Updating bullets
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].update()
    }

}

function starDraw() {
    image(this.img, this.x, this.y, this.width, this.height);
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].draw();
    }
}

function bulletConstructor(params) {
    this.dir = params.dir || createVector(1, 0);
    this.speed = 10;
    this.x = sprite.x + sprite.width / 2 - this.width / 2;
    this.y = sprite.y + sprite.height / 2 - this.height / 2;
}
function bulletUpdate() {
    this.x += this.dir.x * this.speed;
    this.y += this.dir.y * this.speed;
}
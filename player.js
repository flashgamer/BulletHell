// JavaScript source code

function playerConstructor(params) {
    this.bullets = [];
    this.dir = params.dir || createVector(0, 0);
}

function playerUpdate() {
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

function playerDraw() {
    image(this.img, this.x, this.y, this.width, this.height);
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].draw();
    }
}

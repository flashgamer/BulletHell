// JavaScript source code

function playerConstructor(params) {
    this.bullets = [];
    this.dir = params.dir || createVector(0, 0);
}

function playerUpdate() {
    // Deal with input
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && player.x > 0) { // Left or 'A'
        this.x -= 3;
        this.dir = createVector(-1, 0);
    }
    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && player.width + player.x < width) { // Right or 'D'
        this.x += 3;
        this.dir = createVector(1, 0);
    }
    if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && player.y > 0) { // Up or 'W'
        this.y -= 3;
        this.dir = createVector(0, -1);
    }
    if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && player.height + player.y < height) { // Down or 'S'
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

    // Updating location
    this.top = this.y;
    this.bottom = this.y + this.height;
    this.left = this.x;
    this.right = this.x + this.width;
    
    // Updating bullets
    for (var i = this.bullets.length - 1; i > -1; i--) {
        this.bullets[i].update()
        if (this.bullets[i].x < 0 || this.bullets[i].x > width || this.bullets[i].y < 0 || this.bullets[i].y > height) {
            this.bullets.splice(i, 1);
        }
    }

    // Updating collision
    for (var i = walls.length - 1; i > -1; i--) {
        if (colliding(this, walls[i])) {
            walls[i].color = 'red';
        } else {
            walls[i].color = 'black';
        }
    }

}

function playerDraw() {
    image(this.img, this.x, this.y, this.width, this.height);
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].draw();
    }
}

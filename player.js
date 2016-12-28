// JavaScript source code


/*
----------------------------------------
Player
----------------------------------------
*/
function playerConstructor(params) {
    this.bullets = [];
    this.dir = params.dir || createVector(0, 0);
    this.speed = params.speed || 3;
}

function playerUpdate() {
    // Deal with input
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && player.x > 0) { // Left or 'A'
        this.x -= this.speed;
        this.dir = createVector(-1, 0);
    }
    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && player.width + player.x < width) { // Right or 'D'
        this.x += this.speed;
        this.dir = createVector(1, 0);
    }
    if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && player.y > 0) { // Up or 'W'
        this.y -= this.speed;
        this.dir = createVector(0, -1);
    }
    if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && player.height + player.y < height) { // Down or 'S'
        this.y += this.speed;
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
/*
----------------------------------------
End Player
----------------------------------------
*/

/*
----------------------------------------
Bullets
----------------------------------------
*/
function bulletConstructor(params) {
    this.dir = params.dir || createVector(1, 0);
    this.speed = 10;
    //this.x = player.x + player.width / 2 - this.width / 2;
    //this.y = player.y + player.height / 2 - this.height / 2;
}
function bulletUpdate() {
    this.x += this.dir.x * this.speed;
    this.y += this.dir.y * this.speed;
}
/*
----------------------------------------
End Bullets
----------------------------------------
*/

/*
----------------------------------------
Turrets
----------------------------------------
*/

function turretConstructor(params) {
    this.dir = createVector(player.x - this.x, player.y - this.y).normalize();
    console.log(this.dir);
    this.maxCooldown = 100;
    this.cooldown = this.maxCooldown;
    this.bullets = [];
}
function turretUpdate() {
    this.dir = createVector(player.x - this.x, player.y - this.y).normalize();
    if (this.cooldown < 1) {
        // Shoot
        this.bullets.push(
            new Sprite({
                dir: this.dir,
                src: "bullet",
                x: this.center.x,
                y: this.center.y
            },
            {
                update: bulletUpdate,
                constructor: bulletConstructor
            })
        );
        this.cooldown = this.maxCooldown;
    } else {
        this.cooldown -= 1;
    }
    // Updating bullets
    for (var i = this.bullets.length - 1; i > -1; i--) {
        this.bullets[i].update()
        if (this.bullets[i].x < 0 || this.bullets[i].x > width || this.bullets[i].y < 0 || this.bullets[i].y > height) {
            this.bullets.splice(i, 1);
        }
    }
}
function turretDraw() {
    image(this.img, this.x, this.y, this.width, this.height);
    for (var i = this.bullets.length - 1; i > -1; i--) {
        this.bullets[i].draw();
    }
}
/*
----------------------------------------
End Turrets
----------------------------------------
*/

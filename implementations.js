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
    this.lives = params.lives || 3;
}

function playerUpdate() {
    this.mandatoryUpdate();
    if (this.lives <= 0) {
        // Game Over state.
    }
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
        // Create new bullet on space bar press
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
    for (var i = this.bullets.length - 1; i > -1; i--) {
        this.bullets[i].update()
        if (this.bullets[i].x < 0 || this.bullets[i].x > width || this.bullets[i].y < 0 || this.bullets[i].y > height) {
            this.bullets.splice(i, 1);
        }
    }

    // Updating turrets...?
    //for (var i = turrets.length - 1; i > -1; i--) {
    //    turrets[i].dir = this.center.copy().sub(turrets[i].center).normalize();
    //}

    // Updating collision
    for (var i = walls.length - 1; i > -1; i--) {
        if (colliding(this, walls[i])) {
            walls[i].color = 'red';
        } else {
            walls[i].color = 'black';
        }
    }
    for (var i = turrets.length - 1; i > -1; i--) {
        for (var j = turrets[i].bullets.length - 1; j > -1; j--) {
            if (colliding(this, turrets[i].bullets[j])) {
                turrets[i].bullets[j].img = res['redbullet'];
                this.lives--;
            } else {
                turrets[i].bullets[j].img = res['bullet'];
            }
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
    this.speed = 15;
    //this.x = player.x + player.width / 2 - this.width / 2;
    //this.y = player.y + player.height / 2 - this.height / 2;
}
function bulletUpdate() {
    this.mandatoryUpdate();
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
    this.dir = player.center.copy().sub(this.center).normalize();
    this.maxCooldown = 60;
    this.cooldown = this.maxCooldown;
    this.bullets = [];
}
function turretUpdate() {
    this.mandatoryUpdate();
    this.dir = player.center.copy().sub(this.center).normalize();
    if (this.cooldown < 1) {
        // Shoot
        this.bullets.push(
            new Sprite({
                dir: this.dir,
                src: "bullet",
                x: this.center.x,
                y: this.center.y,
                width: 16,
                height: 16
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
    //imageMode(CENTER)
    resetMatrix();
    translate(this.center.x, this.center.y);
    rotate(this.dir.heading());
    image(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
    resetMatrix();
    //imageMode(CORNER);
    for (var i = this.bullets.length - 1; i > -1; i--) {
        this.bullets[i].draw();
    }
}
/*
----------------------------------------
End Turrets
----------------------------------------
*/

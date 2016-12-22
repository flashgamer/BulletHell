// JavaScript source code

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

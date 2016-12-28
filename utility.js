// JavaScript source code

function colliding(ob1, ob2) {
    if (ob1.left < ob2.right &&
        ob1.right > ob2.left &&
        ob1.top < ob2.bottom &&
        ob1.bottom > ob2.top) {
        return true;
    } else {
        return false;
    }
}

function drawImage(sp) {
    image(this.img,
        sp.x, // Destination x-pos
        sp.y, // Destination y-pos
        sp.width, // Desired width at Destination
        sp.height, // Desired heigth at Destination
        sp.frameIndex * (this.img.width / this.numFrames), // Source x-pos
        0, // Source y-pos
        sp.img.width / this.numFrames, // Source draw width
        sp.height); // Source draw height
}
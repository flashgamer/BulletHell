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
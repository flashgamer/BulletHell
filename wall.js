// JavaScript source code

function Wall(params, methods) {
    this.x = params.x || 0;
    this.y = params.y || 0;
    this.width = params.width || 50;
    this.height = params.height || 50;
    this.color = params.color || "black";

    // Calculate top/bottom/left/right

    this.draw = methods.draw || function () {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }
}
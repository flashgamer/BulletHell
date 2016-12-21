function Sprite(params, update, draw) {
    this.x = params.x || 0;
    this.y = params.y || 0;
    this.src = params.src || 0;

    this.img = loadImage(this.src);
    this.width = params.width || img.width;
    this.height = params.height || img.height;

    this.update = update || function () {
        // Default update behavior
    }

    this.draw = draw || function () {
        // Default draw behavior
        image(this.img, this.x, this.y);
    }
}
    function Sprite(params, methods) {
        this.x = params.x || 0;
        this.y = params.y || 0;
        this.src = params.src || 0;
        this.numFrames = params.numFrames || 1;
        this.repeat = params.repeat || true;
        this.dirAnim = params.dirAnim || 'horizontal';


        this.img = res[params.src];

        this.width = params.width || this.img.width;
        this.height = params.height || this.img.height;

        this.top = this.y;
        this.bottom = this.y + this.height;
        this.left = this.x;
        this.right = this.x + this.width;

        this.frameIndex = 0;

        if (methods.constructor) {
            this.constructor = methods.constructor;
            this.constructor(params);
        }

        this.update = methods.update || function () {
            this.frameIndex++;
            if (this.frameIndex > this.numFrames) {
                this.frameIndex = 0;
            }
            this.render();
        }

        this.draw = methods.draw || function () {
            // Default draw behavior
            image(this.img,
                this.x, // Destination x-pos
                this.y, // Destination y-pos
                this.width, // Desired width at Destination
                this.height, // Desired heigth at Destination
                this.frameIndex * (this.width / this.numFrames), // Source x-pos
                0, // Source y-pos
                this.img.width / this.numFrames, // Source draw width
                this.height); // Source draw height
        }

        this.render = methods.render || function () {
            this.draw();
        }
    }

    function Sprite(params, methods) {
        this.x = params.x || 0;
        this.y = params.y || 0;
        this.src = params.src || 0;
        this.fps = params.fpt || 0;
        this.frames = params.frames;
        this.repeat = params.repeat;
        this.dirAnim = params.dirAnim || 'horizontal';


        this.img = res[params.src];

        this.width = params.width || this.img.width;
        this.height = params.height || this.img.height;

        this.top = this.y;
        this.bottom = this.y + this.height;
        this.left = this.x;
        this.right = this.x + this.width;

        if (methods.constructor) {
            this.constructor = methods.constructor;
            this.constructor(params);
        }

        this.update = methods.update || function () {
            // Default update behavior
        }

        this.draw = methods.draw || function () {
            // Default draw behavior
            image(this.img, this.x, this.y, this.width, this.height);
        }
    }

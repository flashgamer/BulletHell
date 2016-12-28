    function Sprite(params, methods) {
        this.x = params.x || 0;
        this.y = params.y || 0;
        this.loc = createVector(this.x, this.y);
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

        this.center = this.loc.add(createVector(this.width / 2, this.height / 2));

        if (methods.constructor) {
            this.constructor = methods.constructor;
            this.constructor(params);
        }

        this.mandatoryUpdate = function () {
            // Updating Animation
            this.frameIndex++;
            if (this.frameIndex >= this.numFrames) {
                this.frameIndex = 0;
            }

            // Updating location
            this.top = this.y;
            this.bottom = this.y + this.height;
            this.left = this.x;
            this.right = this.x + this.width;

            this.center = createVector(this.x + this.width / 2, this.y + this.height / 2);
            this.loc = createVector(this.x, this.y);
        }

        this.update = methods.update || function () {

        }

        this.draw = methods.draw || function () {
            // Default draw behavior
            image(this.img,
                this.x, // Destination x-pos
                this.y, // Destination y-pos
                this.width, // Desired width at Destination
                this.height, // Desired heigth at Destination
                this.frameIndex * (this.img.width / this.numFrames), // Source x-pos
                0, // Source y-pos
                this.img.width / this.numFrames, // Source draw width
                this.height); // Source draw height
        }
    }

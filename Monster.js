class Monster {
    constructor(resources, gameScene, x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.animation = undefined
        this.frames = {
            stand: [],
            walk: {
                backward: [],
                left: [],
                forward: [],
                right: [],
            },
        }

        const textures = resources[`images/Monster.json`].textures;

        this.frames.stand.push(textures[`sprite79`]);

        for (let i = 0; i < 7; i++) {
            //walking backwards is 1 - 7
            this.frames.walk.backward.push(textures[`sprite${i + 1}`]);
            // walking left is 8 - 14
            this.frames.walk.left.push(textures[`sprite${i + 8}`]);
            //walking forward is 15 - 21
            this.frames.walk.forward.push(textures[`sprite${i + 15}`]);
            //walking right is 22 - 28
            this.frames.walk.right.push(textures[`sprite${i + 22}`]);
        }

        this.walk(gameScene, "forward");
    }

    transform() {
        this.x += this.vx
        this.y += this.vy
        this.animation.x = this.x
        this.animation.y = this.y
    }

    animate(gameScene, frames, loop = true) {
        if (this.animation) this.animation.destroy()
        this.animation = new PIXI.extras.AnimatedSprite(frames);

        this.animation.x = this.x;
        this.animation.y = this.y
        this.animation.animationSpeed = 0.12;
        this.animation.loop = loop ? true : false;
        this.animation.play()

        gameScene.addChild(this.animation);
    }

    walk(gameScene, dir) {
        this.animate(gameScene, this.frames.walk[dir]);
    }
}
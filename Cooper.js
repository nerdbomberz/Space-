class Cooper {
    constructor(resources, gameScene, x, y) {
        this.x = 68;
        this.y = gameScene.height / 2;
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

        const textures = resources[`images/Cooper.json`].textures;

        this.frames.stand.push(textures[`sprite79`]);

        for (let i = 0; i < 9; i++) {
            //walking backwards is 61 - 69
            this.frames.walk.backward.push(textures[`sprite${i + 61}`]);
            // walking left is 70 - 78
            this.frames.walk.left.push(textures[`sprite${i + 70}`]);
            //walking forward is 79 - 87
            this.frames.walk.forward.push(textures[`sprite${i + 79}`]);
            //walking right is 88 - 96
            this.frames.walk.right.push(textures[`sprite${i + 88}`]);
        }

        this.walk(gameScene, "forward");
    }

    animate(gameScene, frames, loop = true) {
        if (this.animation) this.animation.destroy()
        this.animation = new PIXI.extras.AnimatedSprite(frames);

        this.animation.x = this.x;
        this.animation.y = this.y
        this.animation.vx = this.vx;
        this.animation.vy = this.vy;
        this.animation.anchor.set(0, 5)
        this.animation.animationSpeed = 0.12;
        this.animation.loop = loop ? true : false;
        this.animation.play()

        gameScene.addChild(this.animation);
    }

    walk(gameScene, dir) {
        this.animate(gameScene, this.frames.walk[dir]);
    }
}
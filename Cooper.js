class Cooper {
    x = 68
    y = 0
    animation

    fames = {
        stand: [],
        walk:{
            backward: [],
            left: [],
            forward:[],
            right:[],
        },
    }

    constructor(resources, gameScene, x , y){
        this.x = x;
        this.y = y;

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

    animate(gameScene,frames, loop=true){
        if (this.animation) this.animation.destroy()
        this.animation = new PIXI.AnimatedSprite(frames);

        this.animation.x = this.x;
        this.animation.y = this.y;
        this.animation.anchor.set(0,5)
        this.animation.animationSpeed = 0.12;
        this.animation.loop = loop ? true : false;
        this.animation.play()

        gameScene.addChild(this.animation);
    }

    walk(gameScene, dir) {
        this.animate(gameScene, this.frames.walk[dir]);
    }
}
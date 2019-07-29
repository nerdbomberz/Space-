class Monster {
    constructor(resources, gameScene){

        this.textures = resources[`images/Monster.json`].textures;

        this.sprite = new Sprite(this.textures[`sprite1`]);

        this.sprite.x = 68 + 64 + 64 + 64 + 64 + 64 + 64;
        this.sprite.y = gameScene.height / 2 - this.sprite.height / 2;
        this.sprite.vx = 0;
        this.sprite.vy = 0;
        gameScene.addChild(this.sprite);
    }

}
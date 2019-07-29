class RedRoom {
    constructor(resources, gameScene){

        this.textures = resources[`images/Floors.json`].textures;

        this.sprite = new Sprite(this.textures[`Red room`]);

        
        gameScene.addChild(this.sprite);
    }

}
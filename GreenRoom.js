class GreenRoom {
    constructor(resources, gameScene){

        this.textures = resources[`images/Floors.json`].textures;

        this.sprite = new Sprite(this.textures[`Green room`]);

        
        gameScene.addChild(this.sprite);
    }

}
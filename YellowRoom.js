class YellowRoom {
    constructor(resources, gameScene){

        this.textures = resources[`images/Floors.json`].textures;

        this.sprite = new Sprite(this.textures[`Yellow room`]);

        
        gameScene.addChild(this.sprite);
    }

}
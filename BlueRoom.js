class BlueRoom {
    constructor(resources, gameScene){

        this.textures = resources[`images/Floors.json`].textures;

        this.sprite = new Sprite(this.textures[`Blue room`]);

        
        gameScene.addChild(this.sprite);
    }

}
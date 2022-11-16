
let config = {
    type: Phaser.AUTO,
    //pixel size * tile map size * zoom
    width: 32 * 50,
    height: 32 * 35,
    
    physics: {
        default: 'arcade',
        arcade: {
          debug: true
        }
    },   
    scale: {
      // mode: Phaser.Scale.NONE,
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [ preloadScene, main, level01, level02, level03, level04]
}

var game = new Phaser.Game(config);

let config = {
    type: Phaser.AUTO,
    //pixel size * tile map size * zoom
    width: 32 * 60,
    height: 32 * 40,
    
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
    scene: [ preloadScene, showInventory, story, instruction, level01, level02, level03, level04, gameover]
}

var game = new Phaser.Game(config);
window.key = 0;
window.heart = 3;

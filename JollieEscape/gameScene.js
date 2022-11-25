class gameScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameScene' });
    }

    preload(){
        this.load.image("heart", "assets/heart.png");
        this.load.image("key", "assets/key.png");
        
        //load sound effect
        this.load.audio('hitenemy', 'assets/pophitenemy.mp3');
        this.load.audio('collectkey','assets/dingcollect.mp3');
        this.load.audio('loselife','assets/loselife.mp3');
        
    }
 
   create () {
       
     // start another scene in parallel
    this.scene.launch("showInventory");

    //Add sound
    this.hitenemySnd = this.sound.add('hitenemy');
    this.loselifeSnd = this.sound.add('loselife');
   
      
    } //end of create

} // end of class

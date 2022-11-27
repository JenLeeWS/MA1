class gameScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameScene' });
    }

    preload(){
        this.load.image("heart", "assets/heart.png");
              
        //load sound effect
        this.load.audio('hitenemy', 'assets/pophitenemy.mp3');
        this.load.audio('loselife','assets/loselife.mp3');
        
    }
 
   create () {

    // Call to update inventory
    this.time.addEvent({
        delay: 500,
        callback: updateInventory,
        callbackScope: this,
        loop: false,
        });

    //Add sound
    this.hitenemySnd = this.sound.add('hitenemy');
    this.loselifeSnd = this.sound.add('loselife');
       
     // start another scene in parallel
    this.scene.launch("showInventory");

    //Ant overlap player
    this.physics.add.overlap(this.player, [this.antright1, this.antright2, this.antright3, this.antright4], hitAnt, null, this);
     
} //end of create
   

} // end of class

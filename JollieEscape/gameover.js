class gameover extends Phaser.Scene {

    constructor() {
        super({
            key: 'gameover'
        });

        // Put global variable here
    }

    preload() {
        //load image
        this.load.image("gameover", "assets/gameover.jpg");
        //load sound effect
        this.load.audio('loselife','assets/loselife.mp3');

    }

    create() {

        console.log('*** gameover scene');

        // Add image and detect spacebar keypress
        this.add.image(0,0, 'gameover').setOrigin(0,0);
        this.add.sprite(920, 400, "Spirit").setScale(8).play('float');
        this.loselifeSnd = this.sound.add('loselife').setVolume(0.2);
        
        //reload 3 hearts 
        window.heart = 3;

        // 'T' key
        var keyT = this.input.keyboard.addKey(84);

        keyT.on('down', function(){
            console.log('Try Again');
            this.scene.start("level01");
        }, this );
   
    }


} 
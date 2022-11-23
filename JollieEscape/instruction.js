class instruction extends Phaser.Scene {

    constructor() {
        super({
            key: 'instruction'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here
        this.load.image("instruction", "assets/instruction.jpg");
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** main scene');

        // Add image and detect spacebar keypress
        this.add.image(0, 0, 'instruction').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to Level 01 scene');
            this.scene.start('level01');
        }, this);


        // Add any text in the main page
        this.add.text(1400, 1090, 'Press spacebar to play', {font: '30px Futura PT Medium', fill: '#272e66' });
        
        // Create all the game animations here

    }


}
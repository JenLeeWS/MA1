class story extends Phaser.Scene {

    constructor() {
        super({
            key: 'story'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here
        this.load.image("story", "assets/storypage.jpg");
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** story scene');

        // Add image and detect spacebar keypress
        this.add.image(0,0, 'story').setOrigin(0,0);
        this.add.sprite(350, 1050, "Jollie").setScale(10).play('down-Jollie');

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to instruction scene');
            this.scene.start('instruction');
        }, this);


        // Add any text in the main page
        this.add.text(850, 1100, 'Press spacebar to continue', {font: '30px Futura PT Medium', fill: '#272e66' });
        this.add.text(550, 750, 'Where am I? I do not like it here. I need to escape', {font: '50px Futura PT Medium', fill: '#272e66' });

        // Create all the game animations here

    }


}
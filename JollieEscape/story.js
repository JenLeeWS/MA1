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
        this.add.sprite(250, 450, "Jollie").setScale(8).play('down-Jollie');
        this.add.sprite(1700, 950, "Spirit").setScale(5).play('float');

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to instruction scene');
            this.scene.start('instruction');
        }, this);


        // Text
        this.add.text(850, 1100, 'Press spacebar to continue', {font: '30px Futura PT Medium', fill: '#272e66' });
        this.add.text(630, 250, 'Where am I? I do not like it here. I need to escape', {font: '45px Futura PT Medium', fill: '#272e66' });
        this.add.text(700, 880, 'Hi, my name is Sunny. I will help you to escape', {font: '45px Futura PT Medium', fill: '#272e66' });

    

    }


}
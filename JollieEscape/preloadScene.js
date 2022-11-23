class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload(){
        //Ant spritesheet
        this.load.spritesheet('Ant', 'assets/ant.png', {frameWidth: 64, frameHeight: 64});
        //Jollie spritesheet 64 x 64 12 frames per animation
       this.load.spritesheet('Jollie', 'assets/Jollie.png', {frameWidth: 64, frameHeight: 64});

       this.load.image("art", "assets/art.png");
       this.load.image("basement", "assets/basement.png");
       this.load.image("bathroom", "assets/bathroom.png");
       this.load.image("bedroom", "assets/bedroom.png");
       this.load.image("generic", "assets/generic.png");
       this.load.image("hospital", "assets/hospital.png");
       this.load.image("kitchen", "assets/kitchen.png");
       this.load.image("library", "assets/library.png");
       this.load.image("living room", "assets/living room.png");
       this.load.image("museum", "assets/museum.png");
       this.load.image("music", "assets/music.png");
       this.load.image("roombuilder", "assets/roombuilder.png");
       this.load.image("tv", "assets/tv.png");
       this.load.image("key", "assets/key.png");
       this.load.image("plant", "assets/plant.png");
       this.load.image("forest", "assets/forest.png");
       this.load.image("intro", "assets/intropage.jpg");
       
       // Preload any sound and music here
       this.load.audio('bgMusic', 'assets/russianfun.mp3');
    }
 
   create () {

        this.add.image(0,0, 'intro').setOrigin(0,0);
        this.add.sprite(1750, 1050, "Jollie").setScale(5).play('left-Jollie');
                
        this.add.text(850,1120, 'Welcome to escape game', {font: '30px Futura PT Medium', fill: '#272e66' });
        this.add.text(850, 1160, 'Press spacebar to continue', {font: '30px Futura PT Medium', fill: '#272e66' });

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume
        this.bgMusic = this.sound.add('bgMusic', {loop: true,}).setVolume(0.3);
        this.bgMusic.stop();

        //this.music.play()
        //window.music = this.music
        window.music = this.music;

           
        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);
        var key2 = this.input.keyboard.addKey(50);
        var key3 = this.input.keyboard.addKey(51);
        var key4 = this.input.keyboard.addKey(52);

        key1.on('down', function(){
            this.scene.stop("preloadScene");
            this.scene.start("level01");
        }, this );

        key2.on('down', function(){
            this.scene.stop("preloadScene");
            this.scene.start("level02");
        }, this );

        key3.on('down', function(){
            this.scene.stop("preloadScene");
            this.scene.start("level03");
        }, this );

        key4.on('down', function(){
            this.scene.stop("preloadScene");
            this.scene.start("level04");
        }, this );

        // this.input.on('pointerdown', function (pointer){
        //     this.scene.start("level01");
        // }, this);

        spaceDown.on('down', function(){
            console.log("story");
            this.scene.start("story");
            }, this );

    //Jollie anims create
    this.anims.create({
        key:'right-Jollie',
        frames:this.anims.generateFrameNumbers('Jollie',
        { start:0, end:2 }),
        frameRate:200,
        repeat:-1});
        
        this.anims.create({
        key:'up-Jollie',
        frames:this.anims.generateFrameNumbers('Jollie',
        { start:3, end:5 }),
        frameRate:200,
        repeat:-1});
        
        this.anims.create({
        key:'down-Jollie',
        frames:this.anims.generateFrameNumbers('Jollie',
        { start:6, end:8 }),
        frameRate:200,
        repeat:-1});
        
        this.anims.create({
        key:'left-Jollie',
        frames:this.anims.generateFrameNumbers('Jollie',
        { start:9, end:11 }),
        frameRate:200,
        repeat:-1});
  
        //Ant anims create
      this.anims.create({
        key:'right-Ant',
        frames:this.anims.generateFrameNumbers('Ant',
        { start:0, end:2 }),
        frameRate:200,
        repeat:-1});
       
    } //end of create

} // end of class

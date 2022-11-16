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
    }
 
   create () {

        this.add.text(100,950, 'Welcome to escape game', {font: '24px Courier', fill: '#ffffff' });
        this.add.text(100, 1000, 'Press spacebar to continue', {font: '24px Courier', fill: '#ffffff' });
           
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // this.input.on('pointerdown', function (pointer){
        //     this.scene.start("level01");
        // }, this);

        spaceDown.on('down', function(){
            console.log("level01");
            this.scene.start("level01");
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

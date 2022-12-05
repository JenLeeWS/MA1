class level04 extends Phaser.Scene {
  constructor() {
    super({
      key: "level04",
    });

  }

  preload() {
       this.load.tilemapTiledJSON('map4', 'assets/level04.tmj');
       //load sound effect
       this.load.audio('win', 'assets/win.mp3');
  }

  create() {
    console.log("*** level04 scene");

    var map4 = this.make.tilemap({ key: "map4"});
    
    //Sound effects
    this.winSnd = this.sound.add('win');
    this.winSnd.play();

    //TIles
    let kitchenTiles = map4.addTilesetImage("kitchen", "kitchen");
    let museumTiles = map4.addTilesetImage("museum", "museum");
    let plantTiles = map4.addTilesetImage("plant", "plant");
    let forestTiles = map4.addTilesetImage("forest", "forest");
      
    let tilesArray4 = [kitchenTiles, museumTiles, plantTiles, forestTiles];

    //Layers
    this.GroundLayer4 = map4.createLayer("GroundLayer4", tilesArray4, 0,0);
    this.FurnitureLayer4 = map4.createLayer("FurnitureLayer4", tilesArray4, 0,0);
    this.DecorLayer4 = map4.createLayer("DecorLayer4", tilesArray4, 0,0);
    this.EntryLayer4 = map4.createLayer("EntryLayer4", tilesArray4, 0,0);
    
    //Player start point
    var startPoint = map4.findObject("ObjectLayer4", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1.3);
    this.player.setCollideWorldBounds(true);
    window.player = this.player;

    var Sunny = map4.findObject("ObjectLayer4", (obj) => obj.name === "Sunny");
    
    //Spirit anims
    this.spirit = this.physics.add.sprite(Sunny.x, Sunny.y).setScale(3).play("float");

    //Collision
    this.FurnitureLayer4.setCollisionByExclusion(-1, true);
    this.DecorLayer4.setCollisionByExclusion(-1, true);

    this.physics.world.bounds.width = this.GroundLayer4.width;
    this.physics.world.bounds.height = this.GroundLayer4.height;

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.createCursorKeys();

    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map4.widthInPixels, map4.heightInPixels);
      
    //make camera follow player
    this.cameras.main.startFollow(this.player);

    //Collision
    this.physics.add.collider(this.player,this.FurnitureLayer4);
    this.physics.add.collider(this.player,this.DecorLayer4);

    // Text
    this.add.text(250, 570, 'Hooray! You have successfully escape', {font: '70px Futura PT Medium', fill: '#272e66' });
    this.add.text(500, 670, 'Press spacebar to restart', {font: '40px Futura PT Medium', fill: '#272e66'});

   // Check for spacebar or any key here
   var spaceDown = this.input.keyboard.addKey('SPACE');

   spaceDown.on('down', function(){
        console.log('Back to Main Menu');
        this.scene.start("preloadScene");
    }, this );

    console.log("showInventory");

    // start another scene in parallel
    this.scene.stop("showInventory");
    
  } /////////////////// end of create //////////////////////////////


  //player anims
  update() {

    if (this.player.x > 1855 && this.player.y && this.player.y < 678){
      console.log("level04")
      this.level04();
    }
   
    else {

        this.player.setVelocity(0);
      }

    if (this.cursors.left.isDown)
    {
        console.log("left")
        this.player.setVelocityX(-160);
        this.player.anims.play('left-Jollie', true);
    }
    else if (this.cursors.right.isDown)
    {
        console.log("right")
        this.player.setVelocityX(160);
        this.player.anims.play('right-Jollie', true);
    }
    else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-160);
        this.player.anims.play('up-Jollie', true);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(160);
        this.player.anims.play('down-Jollie', true);
    }
    else
    {
        this.player.setVelocity(0);
        //this.player.anims.stop();
    }

  } /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////

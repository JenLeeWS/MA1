class level03 extends Phaser.Scene {
  constructor() {
    super({
      key: "level03",
    });

  }

  preload() {
    this.load.tilemapTiledJSON('map3', 'assets/level03.tmj');
    //load sound effect
    this.load.audio('hitenemy', 'assets/pophitenemy.mp3');
    this.load.audio('collectkey', 'assets/dingcollect.mp3');
  }

  create() {
    console.log("*** level03 scene");

    var map3 = this.make.tilemap({ key: "map3"});
    
    let artTiles = map3.addTilesetImage("art", "art");
    let basementTiles = map3.addTilesetImage("basement", "basement");
    let bathroomTiles = map3.addTilesetImage("bathroom", "bathroom");
    let bedroomTiles = map3.addTilesetImage("bedroom", "bedroom");
    let genericTiles = map3.addTilesetImage("generic", "generic");
    let hospitalTiles = map3.addTilesetImage("hospital", "hospital");
    let kitchenTiles = map3.addTilesetImage("kitchen", "kitchen");
    let libraryTiles = map3.addTilesetImage("library", "library");
    let livingroomTiles = map3.addTilesetImage("living room", "living room");
    let museumTiles = map3.addTilesetImage("museum", "museum");
    let musicTiles = map3.addTilesetImage("music", "music");
    let roombuilderTiles = map3.addTilesetImage("roombuilder", "roombuilder");
    let tvTiles = map3.addTilesetImage("tv", "tv");
  
    let tilesArray3 = [artTiles, basementTiles, bathroomTiles, bedroomTiles, genericTiles, tvTiles,
      hospitalTiles, kitchenTiles, libraryTiles, livingroomTiles, museumTiles, musicTiles, roombuilderTiles];

    this.GroundLayer3 = map3.createLayer("GroundLayer3", tilesArray3, 0,0);
    this.WallLayer3 = map3.createLayer("WallLayer3", tilesArray3, 0,0);
    this.FloorLayer3 = map3.createLayer("FloorLayer3", tilesArray3, 0,0);
    this.FurnitureLayer3 = map3.createLayer("FurnitureLayer3", tilesArray3, 0,0);
    this.DecorLayer3 = map3.createLayer("DecorLayer3", tilesArray3, 0,0);

    //sound effect
    this.hitenemySnd = this.sound.add('hitenemy');
    this.collectkeySnd = this.sound.add('collectkey');
     
    var startPoint = map3.findObject("ObjectLayer3", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1.3);
    this.player.setCollideWorldBounds(true);
    window.player = this.player;

    //key object
    var key1 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key1");
    var key2 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key2");
    var key3 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key3");
    var key4 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key4");
    var key5 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key5");
    var key6 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key6");
    var key7 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key7");
    var key8 = map3.findObject("ObjectLayer3", (obj) => obj.name === "key8");

    //key position
    this.key1 = this.physics.add.sprite(key1.x, key1.y, 'key').setScale(0.75);
    this.key2 = this.physics.add.sprite(key2.x, key2.y, 'key').setScale(0.75);
    this.key3 = this.physics.add.sprite(key3.x, key3.y, 'key').setScale(0.75);
    this.key4 = this.physics.add.sprite(key4.x, key4.y, 'key').setScale(0.75);
    this.key5 = this.physics.add.sprite(key5.x, key5.y, 'key').setScale(0.75);
    this.key6 = this.physics.add.sprite(key6.x, key6.y, 'key').setScale(0.75);
    this.key7 = this.physics.add.sprite(key7.x, key7.y, 'key').setScale(0.75);
    this.key8 = this.physics.add.sprite(key8.x, key8.y, 'key').setScale(0.75);

    //Ant position
    this.antright1 = this.physics.add.sprite(20, 300, "ant1").play("right-Ant").setScale(0.75);
    this.antright2 = this.physics.add.sprite(650, 1100, "ant2").play("right-Ant").setScale(0.75);
    this.antright3 = this.physics.add.sprite(1000, 450, "ant3").play("right-Ant").setScale(0.75);
    this.antright4 = this.physics.add.sprite(40, 1100, "ant4").play("right-Ant").setScale(0.75);

    //Ant overlap player
    this.physics.add.overlap(this.player, this.antright1, this.hitAnt, null, this);
    this.physics.add.overlap(this.player, this.antright2, this.hitAnt, null, this);
    this.physics.add.overlap(this.player, this.antright3, this.hitAnt, null, this);
    this.physics.add.overlap(this.player, this.antright4, this.hitAnt, null, this);
      
    //player overlap keys
    this.physics.add.overlap(this.player,[this.key1, this.key2, this.key3, this.key4, this.key5, this.key6, this.key7, this.key8], this.collectKey, null, this);
           
        // Add time event / movement here
        this.timedEvent = this.time.addEvent({
          delay: 900,
          callback: this.moveRightLeft1,
          callbackScope: this,
          loop: false,
        });
    
        this.timedEvent = this.time.addEvent({
          delay: 900,
          callback: this.moveRightLeft2,
          callbackScope: this,
          loop: false,
        });
    
        this.timedEvent = this.time.addEvent({
          delay: 900,
          callback: this.moveRightLeft3,
          callbackScope: this,
          loop: false,
        });
        
        this.timedEvent = this.time.addEvent({
          delay: 900,
          callback: this.moveRightLeft4,
          callbackScope: this,
          loop: false,
        });

    // What will collider witg what layers
    this.WallLayer3.setCollisionByExclusion(-1, true);
    this.FurnitureLayer3.setCollisionByExclusion(-1, true);
    this.DecorLayer3.setCollisionByExclusion(-1, true);

    this.physics.world.bounds.width = this.GroundLayer3.width;
    this.physics.world.bounds.height = this.GroundLayer3.height;

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
            //set boundary sp camera won't go outside the game world
            this.cameras.main.setBounds(0,0, map3.widthInPixels, map3.heightInPixels);
      
            //make camera follow player
            this.cameras.main.startFollow(this.player);
     
  } /////////////////// end of create //////////////////////////////



  update() {

    if (this.player.x > 1855 && this.player.y && this.player.y < 678){
      console.log("level04")
      this.level04();
    }
   
    else {

        this.player.setVelocity(0);
        this.player.anims.stop();

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
    }

  } /////////////////// end of update //////////////////////////////

  //Ant moveRightLeft
  moveRightLeft1(){
    console.log("moveDownUp");
    this.tweens.timeline({
      targets:this.antright1,
      loop: -1, //loop forever
      ease: "Linear",
      duration: 1000,
      tweens: [
        {
          x: 300,
        },
        {
          x: 950,
        },
      ],
    });
  }

  moveRightLeft2(){
    console.log("moveDownUp");
    this.tweens.timeline({
      targets:this.antright2,
      loop: -1, //loop forever
      ease: "Linear",
      duration: 1000,
      tweens: [
        {
          x: 700,
        },
        {
          x: 2000,
        },
      ],
    });
  }

  moveRightLeft3(){
    console.log("moveDownUp");
    this.tweens.timeline({
      targets:this.antright3,
      loop: -1, //loop forever
      ease: "Linear",
      duration: 1000,
      tweens: [
        {
          x: 1300,
        },
        {
          x: 2000,
        },
      ],
    });
  }

  moveRightLeft4(){
    console.log("moveDownUp");
    this.tweens.timeline({
      targets:this.antright4,
      loop: -1, //loop forever
      ease: "Linear",
      duration: 1000,
      tweens: [
        {
          x: 300,
        },
        {
          x: 2000,
        },
      ],
    });
  }

  hitAnt (player, Ant) {
    console.log("Ant overlap with Jollie");
    //shake the camera
    console.log("shake screen");
    this.cameras.main.shake(100);
    //play sound
    console.log("play sound");
    this.hitenemySnd.play();
}

collectKey(player, key){
  console.log("Collect Key");
  key.disableBody(true, true);
  console.log("play sound");
  this.collectkeySnd.play();
}



    // Function to jump to level04
    level04(player, tile) {
      console.log("level04 function");
      this.scene.start("level04");
    }
} //////////// end of class world ////////////////////////

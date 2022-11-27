class level02 extends Phaser.Scene {
  constructor() {
    super({
      key: "level02",
    });

  }

  preload() {
    this.load.tilemapTiledJSON('map2', 'assets/level02.tmj');
    //load sound effect
    this.load.image("key", "assets/key.png");
    this.load.image("heart", "assets/heart.png");
    this.load.audio('collectkey','assets/dingcollect.mp3');
    this.load.audio('hitenemy', 'assets/pophitenemy.mp3');
    this.load.audio('loselife','assets/loselife.mp3');
  }

  create() {
    console.log("*** level02 scene");

    // start another scene in parallel
    this.scene.launch("showInventory");

    // Call to update inventory
    this.time.addEvent({
      delay: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
      });

    var map2 = this.make.tilemap({ key: "map2"});

    //sound effect
    this.collectkeySnd = this.sound.add('collectkey');
    this.hitenemySnd = this.sound.add('hitenemy');
    this.loselifeSnd = this.sound.add('loselife');

    let artTiles = map2.addTilesetImage("art", "art");
    let basementTiles = map2.addTilesetImage("basement", "basement");
    let bathroomTiles = map2.addTilesetImage("bathroom", "bathroom");
    let bedroomTiles = map2.addTilesetImage("bedroom", "bedroom");
    let genericTiles = map2.addTilesetImage("generic", "generic");
    let hospitalTiles = map2.addTilesetImage("hospital", "hospital");
    let kitchenTiles = map2.addTilesetImage("kitchen", "kitchen");
    let libraryTiles = map2.addTilesetImage("library", "library");
    let livingroomTiles = map2.addTilesetImage("living room", "living room");
    let museumTiles = map2.addTilesetImage("museum", "museum");
    let musicTiles = map2.addTilesetImage("music", "music");
    let roombuilderTiles = map2.addTilesetImage("roombuilder", "roombuilder");
    let tvTiles = map2.addTilesetImage("tv", "tv");
  
    let tilesArray2 = [artTiles, basementTiles, bathroomTiles, bedroomTiles, genericTiles, tvTiles,
      hospitalTiles, kitchenTiles, libraryTiles, livingroomTiles, museumTiles, musicTiles, roombuilderTiles];

    this.GroundLayer2 = map2.createLayer("GroundLayer2", tilesArray2, 0,0);
    this.WallLayer2 = map2.createLayer("WallLayer2", tilesArray2, 0,0);
    this.FloorLayer2 = map2.createLayer("FloorLayer2", tilesArray2, 0,0);
    this.FurnitureLayer2 = map2.createLayer("FurnitureLayer2", tilesArray2, 0,0);
    this.DecorLayer2 = map2.createLayer("DecorLayer2", tilesArray2, 0,0);
    this.EntryLayer2 = map2.createLayer("EntryLayer2", tilesArray2, 0,0);
    

    // Add main player here with physics.add.sprite
    var startPoint = map2.findObject("ObjectLayer2", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1.3);
    this.player.setCollideWorldBounds(true);

      // //key object
      var key1 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key1");
      var key2 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key2");
      var key3 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key3");
      var key4 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key4");
      var key5 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key5");
      var key6 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key6");
      var key7 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key7");
     
       this.key1 = this.physics.add.sprite(key1.x, key1.y, 'key').setScale(1);
       this.key2 = this.physics.add.sprite(key2.x, key2.y, 'key').setScale(1);
       this.key3 = this.physics.add.sprite(key3.x, key3.y, 'key').setScale(1);
       this.key4 = this.physics.add.sprite(key4.x, key4.y, 'key').setScale(1);
       this.key5 = this.physics.add.sprite(key5.x, key5.y, 'key').setScale(1);
       this.key6 = this.physics.add.sprite(key6.x, key6.y, 'key').setScale(1);
       this.key7 = this.physics.add.sprite(key7.x, key7.y, 'key').setScale(1);

       //Ant position
       this.antright1 = this.physics.add.sprite(150, 175, "ant1").play("right-Ant").setScale(0.75);
       this.antright2 = this.physics.add.sprite(650, 1100, "ant2").play("right-Ant").setScale(0.75);
       this.antright3 = this.physics.add.sprite(1200, 500, "ant3").play("right-Ant").setScale(0.75);

       //Ant overlap player
       this.physics.add.overlap(this.player, [this.antright1, this.antright2, this.antright3], hitAnt, null, this);
  
       //player overlap keys
       this.physics.add.overlap(this.player, [this.key1, this.key2, this.key3, this.key4, this.key5, this.key6, this.key7], this.collectKey, null, this);
      
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

    // What will collider witg what layers
    this.WallLayer2.setCollisionByExclusion(-1, true);
    this.FurnitureLayer2.setCollisionByExclusion(-1, true);
    this.DecorLayer2.setCollisionByExclusion(-1, true);

    this.physics.world.bounds.width = this.GroundLayer2.width;
    this.physics.world.bounds.height = this.GroundLayer2.height;

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map2.widthInPixels, map2.heightInPixels);
      
    //make camera follow player
    this.cameras.main.startFollow(this.player);

      this.physics.add.collider(this.player,this.WallLayer2);
      this.physics.add.collider(this.player,this.FurnitureLayer2);
      this.physics.add.collider(this.player,this.DecorLayer2);


  } /////////////////// end of create //////////////////////////////



  update() {

    if (this.player.x > 1855 && this.player.y && this.player.y < 678){
      console.log("level03")
      this.level03();
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

collectKey(player, key){
  console.log("Collect Key");
  key.disableBody(true, true);
  console.log("play sound");
  this.collectkeySnd.play(); 
}

    // Function to jump to level03
    level03(player, tile) {
      console.log("level03 function");
      this.scene.start("level03");
    }
} //////////// end of class world ////////////////////////

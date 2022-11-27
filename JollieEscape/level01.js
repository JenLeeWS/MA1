class level01 extends Phaser.Scene {
  constructor() {
    super({
      key: "level01",
    });
  }

  preload() {
    this.load.tilemapTiledJSON('map1', 'assets/level01.tmj');
    this.load.image("key", "assets/key.png");
    this.load.image("heart", "assets/heart.png");
    this.load.audio('collectkey','assets/dingcollect.mp3');
    this.load.audio('hitenemy', 'assets/pophitenemy.mp3');
    this.load.audio('loselife','assets/loselife.mp3');
    }

  create() {
    console.log("*** level01 scene");

    this.collectkeySnd = this.sound.add('collectkey');
    this.hitenemySnd = this.sound.add('hitenemy');
    this.loselifeSnd = this.sound.add('loselife');
     
    var map1 = this.make.tilemap({ key: "map1"});
    
    let artTiles = map1.addTilesetImage("art", "art");
    let basementTiles = map1.addTilesetImage("basement", "basement");
    let bathroomTiles = map1.addTilesetImage("bathroom", "bathroom");
    let bedroomTiles = map1.addTilesetImage("bedroom", "bedroom");
    let genericTiles = map1.addTilesetImage("generic", "generic");
    let hospitalTiles = map1.addTilesetImage("hospital", "hospital");
    let kitchenTiles = map1.addTilesetImage("kitchen", "kitchen");
    let libraryTiles = map1.addTilesetImage("library", "library");
    let livingroomTiles = map1.addTilesetImage("living room", "living room");
    let museumTiles = map1.addTilesetImage("museum", "museum");
    let musicTiles = map1.addTilesetImage("music", "music");
    let roombuilderTiles = map1.addTilesetImage("roombuilder", "roombuilder");
    let tvTiles = map1.addTilesetImage("tv", "tv");
  

    let tilesArray1 = [artTiles, basementTiles, bathroomTiles, bedroomTiles, genericTiles, tvTiles,
      hospitalTiles, kitchenTiles, libraryTiles, livingroomTiles, museumTiles, musicTiles, roombuilderTiles];

    this.GroundLayer = map1.createLayer("GroundLayer", tilesArray1, 0,0);
    this.WallLayer = map1.createLayer("WallLayer", tilesArray1, 0,0);
    this.FloorLayer = map1.createLayer("FloorLayer", tilesArray1, 0,0);
    this.FurnitureLayer = map1.createLayer("FurnitureLayer", tilesArray1, 0,0);
    this.DecorLayer = map1.createLayer("DecorLayer", tilesArray1, 0,0);
    this.EntryLayer = map1.createLayer("EntryLayer", tilesArray1, 0,0);

 
    // Add main player here with physics.add.sprite
    var startPoint = map1.findObject("ObjectLayer", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1.3);
    this.player.setCollideWorldBounds(true);
    window.player = this.player;

    // //key object
    var key1 = map1.findObject("ObjectLayer", (obj) => obj.name === "key1");
    var key2 = map1.findObject("ObjectLayer", (obj) => obj.name === "key2");
    var key3 = map1.findObject("ObjectLayer", (obj) => obj.name === "key3");
    var key4 = map1.findObject("ObjectLayer", (obj) => obj.name === "key4");
   
    this.key1 = this.physics.add.sprite(key1.x, key1.y, "key").setScale(1);
    this.key2 = this.physics.add.sprite(key2.x, key2.y, "key").setScale(1);
    this.key3 = this.physics.add.sprite(key3.x, key3.y, "key").setScale(1);
    this.key4 = this.physics.add.sprite(key4.x, key4.y, "key").setScale(1);

     //Ant position
     this.antright1 = this.physics.add.sprite(150, 175, "ant1").play("right-Ant").setScale(0.75);
     this.antright2 = this.physics.add.sprite(650, 1100, "ant2").play("right-Ant").setScale(0.75);

   
     this.physics.add.overlap(this.player, [this.antright1, this.antright2], hitAnt, null, this);

     //player overlap keys
     this.physics.add.overlap(this.player, [this.key1, this.key2, this.key3, this.key4], this.collectKey, null, this);
     
      
    // Add time event / movement here
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moveRightLeft1,
      callbackScope: this,
      loop: false,
    });

    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moveRightLeft2,
      callbackScope: this,
      loop: false,
    });

    //Collision
    this.WallLayer.setCollisionByExclusion(-1, true);
    this.FurnitureLayer.setCollisionByExclusion(-1, true);
    this.DecorLayer.setCollisionByExclusion(-1, true);

    this.physics.world.bounds.width = this.GroundLayer.width;
    this.physics.world.bounds.height = this.GroundLayer.height;

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.setBounds(0,0, map1.widthInPixels, map1.heightInPixels);

    //make camera follow player
    this.cameras.main.startFollow(this.player);

      this.physics.add.collider(this.player,this.WallLayer);
      this.physics.add.collider(this.player,this.FurnitureLayer);
      this.physics.add.collider(this.player,this.DecorLayer);


  } /////////////////// end of create //////////////////////////////


  update() {

    if (this.player.x > 1855 && this.player.y && this.player.y < 678){
      console.log("level02")
      this.level02();
    }
   
    else {

        this.player.setVelocity(0);
        this.player.anims.stop();

    }

    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-160);
        this.player.anims.play('left-Jollie', true);
    }
    else if (this.cursors.right.isDown)
    {
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
      duration: 3000,
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
      duration: 3000,
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

  
collectKey(player, key){
  console.log("Collect Key");
  key.disableBody(true, true);
  console.log("play sound");
  this.collectkeySnd.play();
 }

    // Function to jump to level02
    level02(player, tile) {
      console.log("level02 function");
      this.scene.start("level02");
    }

} //////////// end of class world ////////////////////////

class level01 extends Phaser.Scene {
  constructor() {
    super({
      key: "level01",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON('map1', 'assets/level01.tmj');
  }

  create() {
    console.log("*** level01 scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });

    var map1 = this.make.tilemap({ key: "map1"});
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

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
  

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];

    let tilesArray1 = [artTiles, basementTiles, bathroomTiles, bedroomTiles, genericTiles, tvTiles,
      hospitalTiles, kitchenTiles, libraryTiles, livingroomTiles, museumTiles, musicTiles, roombuilderTiles];

    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);

    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);

    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.GroundLayer = map1.createLayer("GroundLayer", tilesArray1, 0,0);
    this.WallLayer = map1.createLayer("WallLayer", tilesArray1, 0,0);
    this.FloorLayer = map1.createLayer("FloorLayer", tilesArray1, 0,0);
    this.FurnitureLayer = map1.createLayer("FurnitureLayer", tilesArray1, 0,0);
    this.DecorLayer = map1.createLayer("DecorLayer", tilesArray1, 0,0);
    this.EntryLayer = map1.createLayer("EntryLayer", tilesArray1, 0,0);
    

    // Add main player here with physics.add.sprite
    var startPoint = map1.findObject("ObjectLayer", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1);
    this.player.setCollideWorldBounds(true);
    window.player = this.player;

    // //key object
    var key1 = map1.findObject("ObjectLayer", (obj) => obj.name === "key1");
    var key2 = map1.findObject("ObjectLayer", (obj) => obj.name === "key2");
    var key3 = map1.findObject("ObjectLayer", (obj) => obj.name === "key3");
    var key4 = map1.findObject("ObjectLayer", (obj) => obj.name === "key4");
   
     this.key1 = this.physics.add.sprite(key1.x, key1.y, "key").setScale(0.75);
     this.key2 = this.physics.add.sprite(key2.x, key2.y, "key").setScale(0.75);
     this.key3 = this.physics.add.sprite(key3.x, key3.y, "key").setScale(0.75);
     this.key4 = this.physics.add.sprite(key4.x, key4.y, "key").setScale(0.75);

     this.antright = this.physics.add.sprite(150, 175, "ant").play("right-Ant").setScale(0.75);

        // Add time event / movement here
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.moveRightLeft,
      callbackScope: this,
      loop: false,
    });

    


    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    // this.physics.add.collider(mapLayer, this.player);
    this.WallLayer.setCollisionByExclusion(-1, true);
    this.FurnitureLayer.setCollisionByExclusion(-1, true);
    this.DecorLayer.setCollisionByExclusion(-1, true);

    this.physics.world.bounds.width = this.GroundLayer.width;
    this.physics.world.bounds.height = this.GroundLayer.height;

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
    //set boundary sp camera won't go outside the game world
    this.cameras.main.setBounds(0,0, map1.widthInPixels, map1.heightInPixels);

    //make camera follow player
    this.cameras.main.startFollow(this.player);

      this.physics.add.collider(this.player,this.WallLayer);
      this.physics.add.collider(this.player,this.FurnitureLayer);
      this.physics.add.collider(this.player,this.DecorLayer);

      // Show colliding tiles as different colours 
    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // this.WallLayer.renderDebug(debugGraphics, {
    // tileColor: null, // Color of non-colliding tiles
    // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });

    // this.FurnitureLayer.renderDebug(debugGraphics, {
    // tileColor: null, // Color of non-colliding tiles
    // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });

    // this.DecorLayer.renderDebug(debugGraphics, {
    // tileColor: null, // Color of non-colliding tiles
    // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });
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

  moveRightLeft(){
    console.log("moveDownUp");
    this.tweens.timeline({
      targets:this.antright,
      loop: -1, //loop forever
      ease: "Linear",
      duration: 900,
      tweens: [
        {
          x: 50,
        },
        {
          x: 950,
        },
      ],
    });
  }


    // Function to jump to level02
    level02(player, tile) {
      console.log("level02 function");
      this.scene.start("level02");
    }
} //////////// end of class world ////////////////////////

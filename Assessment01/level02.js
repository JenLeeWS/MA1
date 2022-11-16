class level02 extends Phaser.Scene {
  constructor() {
    super({
      key: "level02",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    //this.load.tilemapTiledJSON("world1", "assets/Tutorial1.json");
    this.load.tilemapTiledJSON('map2', 'assets/level02.tmj');
  }

  create() {
    console.log("*** level02 scene");

    //Step 3 - Create the map from main
    //let map = this.make.tilemap({ key: "world1" });

    var map2 = this.make.tilemap({ key: "map2"});
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");

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
  

    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];

    let tilesArray2 = [artTiles, basementTiles, bathroomTiles, bedroomTiles, genericTiles, tvTiles,
      hospitalTiles, kitchenTiles, libraryTiles, livingroomTiles, museumTiles, musicTiles, roombuilderTiles];

    // Step 6  Load in layers by layers
    //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);

    //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);

    //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);

    this.GroundLayer2 = map2.createLayer("GroundLayer2", tilesArray2, 0,0);
    this.WallLayer2 = map2.createLayer("WallLayer2", tilesArray2, 0,0);
    this.FloorLayer2 = map2.createLayer("FloorLayer2", tilesArray2, 0,0);
    this.FurnitureLayer2 = map2.createLayer("FurnitureLayer2", tilesArray2, 0,0);
    this.DecorLayer2 = map2.createLayer("DecorLayer2", tilesArray2, 0,0);
    this.EntryLayer2 = map2.createLayer("EntryLayer2", tilesArray2, 0,0);
    

    // Add main player here with physics.add.sprite
    var startPoint = map2.findObject("ObjectLayer2", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1);
    this.player.setCollideWorldBounds(true);

    //key object
    // var key1 = map.findObject("ObjectLayer", (obj) => obj.name === "key1");
    // this.key1 = this.physics.add.sprite(key1.x, key1.y, 'key')

      // //key object
      var key1 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key1");
      var key2 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key2");
      var key3 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key3");
      var key4 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key4");
      var key5 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key5");
      var key6 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key6");
      var key7 = map2.findObject("ObjectLayer2", (obj) => obj.name === "key7");
     
       this.key1 = this.physics.add.sprite(key1.x, key1.y, 'key').setScale(0.75);
       this.key2 = this.physics.add.sprite(key2.x, key2.y, 'key').setScale(0.75);
       this.key3 = this.physics.add.sprite(key3.x, key3.y, 'key').setScale(0.75);
       this.key4 = this.physics.add.sprite(key4.x, key4.y, 'key').setScale(0.75);
       this.key5 = this.physics.add.sprite(key5.x, key5.y, 'key').setScale(0.75);
       this.key6 = this.physics.add.sprite(key6.x, key6.y, 'key').setScale(0.75);
       this.key7 = this.physics.add.sprite(key7.x, key7.y, 'key').setScale(0.75);
    
    // Add time event / movement here
    // this.timedEvent = this.time.addEvent({
    //   delay: 1000,
    //   callback: this.delayOneSec,
    //   callbackScope: this,
    //   loop: false,
    // });

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

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

    // Function to jump to level03
    level03(player, tile) {
      console.log("level03 function");
      this.scene.start("level03");
    }
} //////////// end of class world ////////////////////////

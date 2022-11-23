class level04 extends Phaser.Scene {
  constructor() {
    super({
      key: "level04",
    });

  }

  preload() {
       this.load.tilemapTiledJSON('map4', 'assets/level04.tmj');
  }

  create() {
    console.log("*** level04 scene");

    var map4 = this.make.tilemap({ key: "map4"});

    let kitchenTiles = map4.addTilesetImage("kitchen", "kitchen");
    let museumTiles = map4.addTilesetImage("museum", "museum");
    let plantTiles = map4.addTilesetImage("plant", "plant");
    let forestTiles = map4.addTilesetImage("forest", "forest");
      
    let tilesArray4 = [kitchenTiles, museumTiles, plantTiles, forestTiles];

    this.GroundLayer4 = map4.createLayer("GroundLayer4", tilesArray4, 0,0);
    this.FurnitureLayer4 = map4.createLayer("FurnitureLayer4", tilesArray4, 0,0);
    this.DecorLayer4 = map4.createLayer("DecorLayer4", tilesArray4, 0,0);
    this.EntryLayer4 = map4.createLayer("EntryLayer4", tilesArray4, 0,0);
    
    var startPoint = map4.findObject("ObjectLayer4", (obj) => obj.name === "start");
    this.player = this.physics.add.sprite(startPoint.x, startPoint.y, "Jollie");
    this.player.setScale(1.3);
    this.player.setCollideWorldBounds(true);

    //key object
    // var key1 = map.findObject("ObjectLayer", (obj) => obj.name === "key1");
    // this.key1 = this.physics.add.sprite(key1.x, key1.y, 'key')
    
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
    
    this.FurnitureLayer4.setCollisionByExclusion(-1, true);
    this.DecorLayer4.setCollisionByExclusion(-1, true);

    this.physics.world.bounds.width = this.GroundLayer4.width;
    this.physics.world.bounds.height = this.GroundLayer4.height;

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
            //set boundary sp camera won't go outside the game world
            this.cameras.main.setBounds(0,0, map4.widthInPixels, map4.heightInPixels);
      
            //make camera follow player
            this.cameras.main.startFollow(this.player);

    

      // this.physics.add.collider(this.player,this.WallLayer);
      // this.physics.add.collider(this.player,this.FurnitureLayer);
      // this.physics.add.collider(this.player,this.DecorLayer);

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

    // // Function to jump to level03
    // level04(player, tile) {
    //   console.log("level04 function");
    //   this.scene.start("level04");
    // }
} //////////// end of class world ////////////////////////

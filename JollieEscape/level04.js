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
    window.player = this.player;

    var Sunny = map4.findObject("ObjectLayer4", (obj) => obj.name === "Sunny");

    this.spirit = this.physics.add.sprite(Sunny.x, Sunny.y).setScale(3).play("float");
   
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

      // Text
      this.add.text(250, 570, 'Hooray! You have successfully escape', {font: '70px Futura PT Medium', fill: '#272e66' });

    
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

} //////////// end of class world ////////////////////////

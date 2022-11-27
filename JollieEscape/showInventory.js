class showInventory extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'showInventory',
        active: false });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }

    preload(){
    }
 
   create () {

       // Setup heart but visible to false
       this.heartimg1 = this.add.image (100,50,'heart').setScrollFactor(0).setVisible(false);
       this.heartimg2 = this.add.image (170,50,'heart').setScrollFactor(0).setVisible(false);
       this.heartimg3 = this.add.image (240,50,'heart').setScrollFactor(0).setVisible(false);

        // Recv an event, call the method
        this.events.on('inventory', this.updateScreen, this)
    } //end of create

    updateScreen(data){
        console.log('Received event inventory', data);

        switch ( data.heart ) {

            case 3: 
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(true)
                break;
    
            case 2:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(false)
                break;
    
            case 1:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;
             
            case 0:
                this.heartimg1.setVisible(false)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;    
    
            default:
            break;
        }
    
    }

} // end of class

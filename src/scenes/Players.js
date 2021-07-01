class Players extends Phaser.Scene {
    constructor() {
        super("playersScene");
    }

    create() {
        //menu text config
        let menuConfig = {
            fontFamily: 'Marker felt, fantasy',
            fontSize: '20px',
            color: '#779ac9',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
            }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Press the left arrow for 1 player or the right arrow for co-op 2 player', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '18px';
        menuConfig.color = '#3e9e4e';
        this.add.text(game.config.width/2, game.config.height/2, 'P1: press (A) and (D) to Move and (W) to Fish', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'P2: press the left and right arrows to Move and the up arrow to Fish', menuConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            //1p
            this.sound.play('sfx_select');
            this.scene.start('playScene');   
        }

        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            //1p
            this.sound.play('sfx_select');
            this.scene.start('play2Scene');   
        }
    }
}
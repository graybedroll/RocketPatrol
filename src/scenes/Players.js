class Players extends Phaser.Scene {
    constructor() {
        super("playersScene");
    }

    create() {
        //menu text config
        let menuConfig = {
            fontFamily: 'Marker felt, fantasy',
            fontSize: '24px',
            color: '#779ac9',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
            }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Press the left arrow for 1 player or the right arrow for 2 players', menuConfig).setOrigin(0.5);
        
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
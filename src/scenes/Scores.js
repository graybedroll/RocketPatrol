class Scores extends Phaser.Scene {
    constructor() {
        super("scoresScene");
    }

    create() {
        //menu text config
        let scoresConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
            }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'HIGH SCORES', scoresConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2, 'Use left and right arrows to move and (F) to fire', menuConfig).setOrigin(0.5);
        scoresConfig.backgroundColor = '#00FF00';
        scoresConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press the left arrow for Menu', scoresConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

    }

    update() {
        //go back to menu
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
    }
}
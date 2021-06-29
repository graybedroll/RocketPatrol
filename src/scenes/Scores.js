class Scores extends Phaser.Scene {
    constructor() {
        super("scoresScene");
    }

    create() {
        console.log("high scores pls");

        //scores text config
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

        this.add.text(game.config.width/2, game.config.height - borderUISize - borderPadding, 'HIGH SCORES', scoresConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, score1 /n score2 /n score3, menuConfig).setOrigin(0.5);
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
class Scores extends Phaser.Scene {
    constructor() {
        super("scoresScene");
    }

    create() {
        console.log("high scores pls");

        //scores text config
        let scoresConfig = {
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

        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, 'HIGH SCORES', scoresConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - 68, "1. " + score1, scoresConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "2. " + score2, scoresConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 68, "3. " + score3, scoresConfig).setOrigin(0.5);
        scoresConfig.color = '#3e9e4e';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 68, 'Press the left arrow for Menu', scoresConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

    }

    update() {
        //go back to menu
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.sound.play('sfx_select');
            this.scene.start("menuScene");
        }
    }
}
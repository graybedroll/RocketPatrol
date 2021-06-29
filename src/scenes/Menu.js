class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav'); // credit to mixkit.co
        this.load.audio('sfx_explosion', './assets/explosion38.wav'); // credit to zapsplat.com
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav'); // credit to dreamstime.com
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

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL: THE FISHING GAME', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use left and right arrows to move and (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.color = '#3e9e4e';
        menuConfig.fontSize = '18px';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press the left arrow for Novice, the right arrow for Expert, or (H) to see High Scores', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
      }

      update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyH)) {
          this.sound.play('sfx_select');
          this.scene.start('scoresScene');   
        }
      }
}
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

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL: THE FISHING GAME', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use left and right arrows to move and (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press the left arrow for Novice or the right arrow for Expert', menuConfig).setOrigin(0.5);

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
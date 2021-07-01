let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play, Play2, Scores, Players]
  }

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyUP, keyR, keyLEFT, keyRIGHT, keyH, keyW, keyA, keyD;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve high scores
let score1 = 0;
let score2 = 0;
let score3 = 0;

let left, right, fire;
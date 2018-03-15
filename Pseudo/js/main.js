var game = new Phaser.Game(700,500,Phaser.AUTO);

game.state.add('GameState',GameState);
game.state.add('GameStart',GameStart);
game.state.add('GameOver',GameOver);

game.state.start('GameStart');


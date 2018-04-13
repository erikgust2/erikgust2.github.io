var GameOver = {
    create: function(){
        this.add.tileSprite(0,0,1440,1000,'background');
        
        var stil = {font: '50px Arial', fill: '#fff'};
        var text = this.add.text(game.world.centerX,game.world.centerY,'Game Over', stil);
        text.anchor.setTo(0.5);
    }
};
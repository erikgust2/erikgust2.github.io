var GameOver = {
    
    preload: function(){
        this.load.image('background','assets/rocks.png');
        this.load.image('play','assets/playbutt.png');
        this.load.image('quit','assets/quit.png');
        this.load.image('restart','assets/restart.png');
    },
    
    create: function(){
        this.add.tileSprite(0,0,800,1000,'background');
        var slut = this.add.text(game.world.centerX,game.world.centerY,'Tack för att du prövade!',{fontsize: '55px',fill:'#fff'});
        slut.anchor.setTo(0.5,0.5);
    }
}
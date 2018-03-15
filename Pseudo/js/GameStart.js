var GameStart = {
    preload: function(){
        this.load.image('background','assets/rocks.png');
        this.load.image('play','assets/playbutt.png');
        this.load.image('quit','assets/quit.png');
        this.load.image('restart','assets/restart.png');
    },
    create: function(){
        this.add.tileSprite(0,0,800,1000,'background');
        
        var namn = this.add.text(game.world.centerX,100,'Vänd din text!',{fontsize: '55px',fill:'#fff'});
        namn.anchor.setTo(0.5);
        
        var button = game.add.button(game.world.centerX,game.world.centerY,'play');
        button.anchor.setTo(0.5);
        
        button.events.onInputUp.add(function(){
            this.state.start('GameState',true,false);
        },this);
    }
};
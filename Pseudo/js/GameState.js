var GameState = {
    
    create: function(){
        this.add.tileSprite(0,0,800,1000,'background');
        var text = prompt("Skriv din text!");
        this.bakfram(text);
        
        var quitbutton = game.add.button(game.world.centerX -100,400,'quit');
        quitbutton.anchor.setTo(0.5);
        var restartbutton = game.add.button(game.world.centerX + 50,365,'restart');
        quitbutton.anchor.setTo(0.5);
        
        //Starta om GameState
        restartbutton.events.onInputUp.add(function(){
            game.state.start('GameStart',true,false);
        },this);
        
        //Gå till GameOver
        quitbutton.events.onInputUp.add(function(){
            game.state.start('GameOver',true,false);
        },this);
    },
    
    bakfram: function(text){
        var ny =[];
        for (var i = text.length ; i >= 0 ; i--){
          ny.push(text[i]);
          if(text[i] == ' '){
              ny.push('_');
          };
        }
        console.log(ny.join(''));
        var orginal = alert("Du skrev " + "'" + text + "'");
        var fardig = this.add.text(game.world.centerX,game.world.centerY,ny.join(''),{fontsize: '55px',fill:'#fff'});
        fardig.anchor.setTo(0.5);
        //fardig.replace(' ','_')
    },
    
    avsluta: function(){
        
    }
};
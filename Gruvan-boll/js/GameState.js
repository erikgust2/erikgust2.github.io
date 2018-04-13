var GameState = {
    
    create: function(){
        this.add.tileSprite(0,0,/*1440*/3000,1000,'background');
        game.world.setBounds(0,0,3000,1000);
        var platformar = [
        platform1 = this.add.sprite(20,300,'platform'),
        platform2 = this.add.sprite(400,500,'platform')
        ];
        this.platforms = this.add.group();
        this.platforms.enableBody = true;
        
        var platformData = [
            {"x": 20, "y":300},
            {"x": 400, "y": 500},
            {"x": 800, "y": 400},
            {"x": 100,"y": 600},
            {"x": 1200, "y": 350},
            {"x": 1500, "y": 600},
            {"x": 1800, "y": 550},
            {"x": 2050, "y": 550},
            {"x": 2300, "y": 550}
        ];
        
        platformData.forEach(function(element){
            this.platforms.create(element.x,element.y, 'platform');
        }, this);
        
        boll = this.add.sprite(200,20,'boll');
        boll.inputEnabled = true;
        
        enemy = this.add.sprite(2300, 470,'enemy');
        riktning = 'v';
        
        enemy.anchor.setTo(0.5,0.5);
        
        enemy.animations.add('slingra',[0,1,2,3],7,true);
        
        this.physics.enable([boll,platform1,platform2,enemy],Phaser.Physics.ARCADE);
        //boll.body.bounce.y = 0.8;
        boll.body.gravity.y = 1000;
        enemy.body.gravity.y = 600;
        
        game.camera.follow(boll);
        
        
        this.platforms.setAll('body.immovable', true);
        this.platforms.setAll('body.allowGravity', false);
        
        pil = this.input.keyboard.createCursorKeys();
        jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        tryck = this.add.audio('plopp');
        song = this.add.audio('musik');
        song.play();
        
        boll.events.onInputDown.add(this.ploppa);
    },
    
    update: function(){
        if(pil.right.isDown){
            boll.x += 8;
        }else if(pil.left.isDown){
            boll.x -= 8;
        }
        
        enemy.animations.play('slingra');
        if(enemy.x == 2500){
            riktning = 'v';
            enemy.scale.x = 1;
        }else if (enemy.x == 1900){
            riktning = 'h';
            enemy.scale.x = -1;
        }
        
        if(riktning == 'v'){
            enemy.x -= 1;
        }else if(riktning == 'h'){
            enemy.x += 1;
        }
        
        this.physics.arcade.collide(boll,this.platforms);
        this.physics.arcade.collide(enemy,this.platforms);
        
        if(jumpButton.isDown && boll.body.touching.down){
            boll.body.velocity.y = -500;
        }
        if(boll.y > game.world.height){
            this.state.start('GameOver',true,false);
        }
    },
    ploppa: function(){
            tryck.play();
        }
};
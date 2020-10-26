class Game{
    constructor(){

    }
    getState(){
      console.log("xyz");
      var gameStateRef = database.ref('gamestate');
      gameStateRef.on("value",function(data){
          gameState = data.val();
      });
      console.log("GameState"+gameState);
    }

    update(state){
      database.ref('/').update({
          gamestate:state
      });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerRef = await database.ref('playercount').once("value");
            if(playerRef.exists()){
              playerCount = playerRef.val();
              console.log("gameClass" + playerCount);
              player.getCount();
            }
            form = new Form();
            form.display();
          }
          back_img = createSprite(1000,600);
          player_img = createSprite(300,200);
          player_img.addImage(images/basket2.png);
          car3 = createSprite(500,200);
          car3.addImage(car3Img);
          car4 = createSprite(700,200);
          car4.addImage(car4Img);
          cars = [car1,car2,car3,car4];
      }






}
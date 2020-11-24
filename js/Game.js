class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
      }
          form = new Form()
          form.display();
    }
  }
  play(){
    form.hide();
    textSize(30)
    text("1,2,3 go",120,100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var gamer in allPlayers){
         if(gamer === "player" + player.index)
            fill("yellow");
        else
            fill("green");
        display_position += 20
        textSize(15)
        text(allPlayers[gamer].name + ": " + allPlayers[gamer].distance,120,display_position)
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 55
            player.update();
    }
  }
}
